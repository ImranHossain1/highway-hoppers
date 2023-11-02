"use client";
import React from "react";
import { Col, Input, Row } from "antd";
import {
  AimOutlined,
  ApiOutlined,
  FieldTimeOutlined,
  QuestionCircleOutlined,
  ScheduleOutlined,
  UserOutlined,
} from "@ant-design/icons";

import styles from "./homepage.module.css";
import Image from "next/image";

const Drivers = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center", // Center horizontally
      justifyContent: "center", // Center vertically
      height: "300px",
    }}
  >
    <Row
      className={styles.rawStyle}
      style={{ padding: "20px 20px" }}
      gutter={16}
    >
      <Col
        xs={24}
        md={12}
        lg={6}
        className="gutter-row"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          src="/assets/driver/driver1.avif"
          alt="driver1"
          layout="responsive"
          width={1000}
          height={1000}
        />
      </Col>
      <Col
        xs={24}
        md={12}
        lg={6}
        className="gutter-row"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          src="/assets/driver/driver2.jpg"
          alt="driver1"
          layout="responsive"
          width={1000}
          height={1000}
        />
      </Col>
      <Col
        xs={24}
        md={12}
        lg={6}
        className="gutter-row"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          src="/assets/driver/driver3.avif"
          alt="driver1"
          layout="responsive"
          width={1000}
          height={1000}
        />
      </Col>
      <Col
        xs={24}
        md={12}
        lg={6}
        className="gutter-row"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          src="/assets/driver/driver4.jpg"
          alt="driver1"
          layout="responsive"
          width={1000}
          height={1000}
        />
      </Col>
    </Row>
  </div>
);

export default Drivers;
