"use client";
import Form from "@/components/ui/Forms/Form";
import FormInput from "@/components/ui/Forms/FormInput";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import {
  useAcademicFacultyQuery,
  useUpdateAcademicFacultyMutation,
} from "@/redux/api/academic/facultyApi";
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
const EditACFaculty = ({ params }: IDProps) => {
  const { id } = params;
  const router = useRouter();
  const { data, isLoading } = useAcademicFacultyQuery(id);
  const [updateAcademicFaculty] = useUpdateAcademicFacultyMutation();
  const onSubmit = async (values: { title: string }) => {
    message.loading("Updating.....");
    try {
      const res = await updateAcademicFaculty({
        id,
        body: values,
      });
      if (!!res) {
        message.success("Academic Faculty Updated Successfully");
        router.push("/admin/academic/faculty");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const defaultValues: {
    title: string;
  } = {
    title: data?.title || "",
  };
  const base = "admin";

  return (
    <div>
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "academic-faculty", link: `/${base}/academic/faculty` },
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

export default EditACFaculty;
