"use client";
import Form from "@/components/ui/Forms/Form";
import FormInput from "@/components/ui/Forms/FormInput";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import {
  useDepartmentQuery,
  useUpdateDepartmentMutation,
} from "@/redux/api/departmentApi";
import { departmentSchema } from "@/schemas/department";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
type IDProps = {
  params: any;
};
const EditDepartmentPage = ({ params }: IDProps) => {
  const { id } = params;
  const router = useRouter();
  const { data, isLoading } = useDepartmentQuery(id);
  const [updateDepartment] = useUpdateDepartmentMutation();
  const onSubmit = async (values: { title: string }) => {
    message.loading("Updating.....");
    try {
      await updateDepartment({
        id,
        body: values,
      });
      message.success("Department Updated Successfully");
      router.push("/super_admin/department");
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const defaultValues: {
    title: string;
  } = {
    title: data?.title || "",
  };
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "Department",
            link: "/super_admin/department",
          },
        ]}
      />

      <ActionBar title="Update Department"></ActionBar>
      <Form
        submitHandler={onSubmit}
        resolver={yupResolver(departmentSchema)}
        defaultValues={defaultValues}
      >
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditDepartmentPage;
