"use client";

import Form from "@/components/Forms/Form";
import { Button, Col, Row, message } from "antd";

import { pointsOption } from "@/constants/global";
import styles from "../ui/Homepage/homepage.module.css";
import FormSelectField from "../Forms/FormSelectField";
import FormDatePicker from "../Forms/FormDatePicker";
import { useRouter } from "next/navigation";

type SearchOptions = {
  startingPoint?: string;
  endPoint?: string;
  startDate?: string;
};
const SearchField = ({ searchParams }: { searchParams: SearchOptions }) => {
  const router = useRouter();

  const defaultValues = {
    startingPoint: searchParams?.startingPoint || null,
    endPoint: searchParams?.endPoint || null,
    startDate: searchParams?.startDate || null,
  };

  const onSubmit = async (data: SearchOptions) => {
    const queryParams: SearchOptions = {};

    if (data.startDate) {
      queryParams.startDate = data.startDate;
    }

    if (data.startingPoint) {
      queryParams.startingPoint = data.startingPoint;
    }
    if (data.endPoint) {
      queryParams.endPoint = data.endPoint;
    }

    const queryString = new URLSearchParams(queryParams).toString();
    const destination = queryString ? `book-now?${queryString}` : "book-now";

    router.push(destination);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center horizontally
        justifyContent: "center", // Center vertically
        padding: "20px 0",
      }}
    >
      <h1
        style={{
          textTransform: "capitalize",
          color: "#218380",
          margin: "20px",
        }}
      >
        Find Your Next Destination
      </h1>
      <div className={styles.rawStyle} style={{ padding: "20px" }}>
        <Form submitHandler={onSubmit} defaultValues={defaultValues}>
          <Row gutter={16}>
            <Col xs={24} md={8} lg={8} className="gutter-row">
              <FormSelectField
                name="startingPoint"
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
