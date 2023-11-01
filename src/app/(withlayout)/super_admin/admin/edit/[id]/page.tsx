"use client";
import Form from "@/components/ui/Forms/Form";
import FormDatePicker from "@/components/ui/Forms/FormDatePicker";
import FormInput from "@/components/ui/Forms/FormInput";
import FormSelectField from "@/components/ui/Forms/FormSelectField";
import FormTextArea from "@/components/ui/Forms/FormTextArea";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UploadImage from "@/components/ui/UploadImage";
import { bloodGroupOptions, genderOptions } from "@/constants/global";
import {
  useAddAdminWithFormDataMutation,
  useGetSingleAdminQuery,
  useUpdateAdminMutation,
} from "@/redux/api/adminApi";
import { useDepartmentsQuery } from "@/redux/api/departmentApi";
import { adminSchema } from "@/schemas/admin";
import { IAdmin, IDepartment } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
type IDProps = {
  params: any;
};
const EditAdminPage = ({ params }: IDProps) => {
  const { id } = params;
  const router = useRouter();
  const [updateAdmin] = useUpdateAdminMutation();
  const { data: adminData } = useGetSingleAdminQuery(id);
  const { data: department, isLoading } = useDepartmentsQuery({
    limit: 100,
    page: 1,
  });
  // @ts-ignore
  const departments: IDepartment[] = department?.departments;
  const departmentOptions = departments?.map((department) => {
    return {
      label: department?.title,
      value: department?.id,
    };
  });

  const defaultValues = {
    name: {
      firstName: adminData?.name?.firstName || "",
      lastName: adminData?.name?.lastName || "",
      middleName: adminData?.name?.middleName || "",
    },
    dateOfBirth: adminData?.dateOfBirth || "",
    email: adminData?.email || "",
    designation: adminData?.designation || "",
    contactNo: adminData?.contactNo || "",
    emergencyContactNo: adminData?.emergencyContactNo || "",
    permanentAddress: adminData?.permanentAddress || "",
    presentAddress: adminData?.presentAddress || "",
    bloodGroup: adminData?.bloodGroup || "",
    gender: adminData?.gender || "",
    managementDepartment: adminData?.managementDepartment?.id || "",
  };

  const onSubmit = async (values: any) => {
    message.loading("Updating.....");
    try {
      const res = await updateAdmin({ id: params?.id, body: values }).unwrap();
      // console.log(res);
      if (res?.id) {
        message.success("Admin Successfully Updated!");
        router.push("/super_admin/admin");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `super_admin`,
            link: `/super_admin`,
          },
          {
            label: `admin`,
            link: `/super_admin/admin`,
          },
        ]}
      />
      <div>
        <h1>Update Admin</h1>
      </div>
      <div>
        <Form submitHandler={onSubmit} defaultValues={defaultValues}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p style={{ fontSize: "18px", marginBottom: "10px" }}>
              Admin Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="name.firstName"
                  size="large"
                  label="First Name"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="name.middleName"
                  size="large"
                  label="Middle Name"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="name.lastName"
                  size="large"
                  label="Last Name"
                />
              </Col>

              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormSelectField
                  name="gender"
                  size="large"
                  options={genderOptions}
                  label="Gender"
                  placeholder="Select"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormSelectField
                  name="managementDepartment"
                  size="large"
                  options={departmentOptions}
                  label="Department"
                  placeholder="Select"
                />
              </Col>
            </Row>
          </div>
          {/* //basic info  */}
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p style={{ fontSize: "18px", marginBottom: "10px" }}>
              Basic Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="email"
                  name="email"
                  size="large"
                  label="Email"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="contactNo"
                  size="large"
                  label="Contact Number"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="emergencyContactNo"
                  size="large"
                  label="Emergency Contact No."
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormDatePicker
                  name="dateOfBirth"
                  size="large"
                  label="Date Of Birth"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormSelectField
                  name="bloodGroup"
                  size="large"
                  options={bloodGroupOptions}
                  label="Blood Group"
                  placeholder="Select"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="designation"
                  size="large"
                  label="Designation"
                />
              </Col>
              <Col span={12} style={{ margin: "10px 0" }}>
                <FormTextArea
                  name="presentAddress"
                  label="Permanent address"
                  rows={4}
                />
              </Col>
              <Col span={12} style={{ margin: "10px 0" }}>
                <FormTextArea
                  name="permanentAddress"
                  label="Permanent address"
                  rows={4}
                />
              </Col>
            </Row>
          </div>
          <Button type="primary" htmlType="submit">
            Update Admin
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditAdminPage;
