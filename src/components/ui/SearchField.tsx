"use client";

import Form from "@/components/ui/Forms/Form";
import FormInput from "@/components/ui/Forms/FormInput";
import { Button, Col, Row, message } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import { departmentSchema } from "@/schemas/department";
import { useRouter } from "next/navigation";
import { pointsOption } from "@/constants/global";
import styles from "../ui/Homepage/homepage.module.css";
import FormSelectField from "./Forms/FormSelectField";
import FormDatePicker from "./Forms/FormDatePicker";
const SearchField = () => {
  const router = useRouter();
  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      /* const res = await addAcademicFaculty(data);
      if (!!res) {
        message.success("Academic Faculty Created Successfully");
        router.push("/admin/academic/faculty");
      } */
    } catch (err: any) {
      message.error(err.message);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center horizontally
        justifyContent: "center", // Center vertically
        height: "300px",
      }}
    >
      <h1 style={{ textTransform: "capitalize", color: "#218380" }}>
        Find Your Next Destination
      </h1>
      <div className={styles.rawStyle} style={{ padding: "20px" }}>
        <Form submitHandler={onSubmit}>
          <Row gutter={16}>
            <Col xs={24} md={8} lg={8} className="gutter-row">
              <FormSelectField
                name="startPoint"
                size="large"
                options={pointsOption}
                label="Start Point"
                placeholder="Select"
              />
            </Col>
            <Col xs={24} md={8} lg={8} className="gutter-row">
              <FormSelectField
                name="endPoint"
                size="large"
                options={pointsOption}
                label="End Point"
                placeholder="Select"
              />
            </Col>

            <Col xs={24} md={8} lg={8} className="gutter-row">
              <FormDatePicker
                name="startDate"
                size="large"
                label="Day of Start"
              />
            </Col>
          </Row>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <Button type="primary" htmlType="submit">
              Find Now
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SearchField;
