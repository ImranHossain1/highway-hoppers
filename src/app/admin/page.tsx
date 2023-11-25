"use client";
import React from "react";
import { useMyProfileQuery } from "@/redux/api/userApi";
import Loading from "@/app/loading";
import { Button, Card, Col, Row } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Link from "next/link";
const { Meta } = Card;
const AdminProfile = () => {
  const { data, isLoading } = useMyProfileQuery({});
  if (isLoading) {
    return <Loading />;
  }
  const profileData = data?.data;
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
        /* actions={[
          <Link href={`/admin/edit/${profileData?.id}`} key={"settings"}>
            <Button
              style={{
                margin: "0px 5px",
                backgroundColor: "#218380",
              }}
              onClick={() => console.log(profileData)}
            >
              <SettingOutlined />
            </Button>
          </Link>,
          <Link href={`/admin/edit/${profileData?.id}`} key={"edit"}>
            <Button
              style={{
                margin: "0px 5px",
              }}
              onClick={() => console.log(profileData)}
              type="primary"
            >
              <EditOutlined />
            </Button>
          </Link>,
        ]} */
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
        <Row style={{ marginTop: "20px" }} justify="center">
          <Col span={24}>
            <Meta title="Address" description={profileData?.address} />{" "}
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default AdminProfile;
