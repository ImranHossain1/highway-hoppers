"use client";
import { Col, Row } from "antd";
import React from "react";
import FormInput from "../Forms/FormInput";
import FormSelectField from "../Forms/FormSelectField";
import {
  acDepartmentOptions,
  acSemesterOptions,
  bloodGroupOptions,
  departmentOptions,
  facultyOptions,
  genderOptions,
} from "@/constants/global";
import UploadImage from "../UploadImage";
import FormDatePicker from "../Forms/FormDatePicker";
import FormTextArea from "../Forms/FormTextArea";

const StudentBasicInfo = () => {
  return (
    <div>
      {" "}
      <div
        style={{
          border: "1px solid #d9d9d9",
          borderRadius: "5px",
          padding: "15px",
          marginBottom: "10px",
          marginTop: "10px",
        }}
      >
        <p style={{ fontSize: "18px", marginBottom: "10px" }}>
          Basic Information
        </p>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormInput
              type="email"
              name="student.email"
              size="large"
              label="Email"
            />
          </Col>
          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="student.contactNo"
              size="large"
              label="Contact Number"
            />
          </Col>
          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="student.emergencyContactNo"
              size="large"
              label="Emergency Contact No."
            />
          </Col>
          <Col
            className="gutter-row"
            span={12}
            style={{ marginBottom: "10px" }}
          >
            <FormDatePicker
              name="student.dateOfBirth"
              size="large"
              label="Date Of Birth"
            />
          </Col>
          <Col
            className="gutter-row"
            span={12}
            style={{ marginBottom: "10px" }}
          >
            <FormSelectField
              name="student.gender"
              size="large"
              options={bloodGroupOptions}
              label="Blood Group"
              placeholder="Select"
            />
          </Col>

          <Col span={12} style={{ margin: "10px 0" }}>
            <FormTextArea
              name="student.presentAddress"
              label="Permanent address"
              rows={4}
            />
          </Col>
          <Col span={12} style={{ margin: "10px 0" }}>
            <FormTextArea
              name="student.permanentAddress"
              label="Permanent address"
              rows={4}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default StudentBasicInfo;
