"use client";

import Form from "@/components/ui/Forms/Form";
import FormInput from "@/components/ui/Forms/FormInput";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { Button, Col, Row, message } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import { departmentSchema } from "@/schemas/department";
import { useAddDepartmentMutation } from "@/redux/api/departmentApi";
import { useRouter } from "next/navigation";
import { useAddAcademicFacultyMutation } from "@/redux/api/academic/facultyApi";

const CreateACFacultyPage = () => {
  const router = useRouter();
  const [addAcademicFaculty] = useAddAcademicFacultyMutation();
  const onSubmit = async (data: any) => {
    message.loading("Creating.....");
    try {
      const res = await addAcademicFaculty(data);
      if (!!res) {
        message.success("Academic Faculty Created Successfully");
        router.push("/admin/academic/faculty");
      }
    } catch (err: any) {
      message.error(err.message);
    }
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
      <h1>Create Academic Faculty</h1>
      <Form submitHandler={onSubmit} resolver={yupResolver(departmentSchema)}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
  );
};

export default CreateACFacultyPage;
