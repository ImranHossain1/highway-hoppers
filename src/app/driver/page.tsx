"use client";
import React from "react";
import { useMyProfileQuery } from "@/redux/api/userApi";
import Loading from "@/app/loading";
import { Card, Col, Rate, Row } from "antd";

const { Meta } = Card;
const DriverProfile = () => {
  const { data, isLoading } = useMyProfileQuery({});
  if (isLoading) {
    return <Loading />;
  }
  const profileData = data?.data;
  console.log(profileData);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        hoverable
        style={{ width: 400 }}
        cover={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "200px",
            }}
          >
            <img
              src={profileData?.profileImg}
              alt="Profile Image"
              style={{ height: "200px", width: "200px" }}
            />
          </div>
        }
      >
        <Row>
          <Col span={14}>
            <Meta title="Name" description={profileData?.name} />
          </Col>
          <Col span={10}>
            <Meta title="Email" description={profileData?.email} />
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col span={14}>
            <Meta title="Date Of Birth" description={profileData?.DOB} />
          </Col>
          <Col span={10}>
            <Meta title="Gender" description={profileData?.gender} />
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col span={14}>
            <Meta title="Contact No" description={profileData?.contactNo} />
          </Col>
          <Col span={10}>
            <Meta title="Role" description={profileData?.role} />
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col span={14}>
            <Meta title="Salary" description={profileData?.driver?.salary} />
          </Col>
          <Col span={10}>
            <Meta
              title="Rating"
              description={
                <Rate disabled defaultValue={profileData?.driver?.rating} />
              }
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }} justify="center">
          <Col span={24}>
            <Meta title="Address" description={profileData?.address} />{" "}
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default DriverProfile;
