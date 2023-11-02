"use client";
import React from "react";
import { Col, Row } from "antd";
import {
  ApiOutlined,
  FieldTimeOutlined,
  QuestionCircleOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
import styles from "./homepage.module.css";

const AskButtons = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
    }}
  >
    <Row className={styles.rawStyle} style={{ padding: "20px 20px" }}>
      <Col
        xs={24}
        md={12}
        lg={8}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div>
          <FieldTimeOutlined style={{ fontSize: 80, color: "#e9c46a" }} />
        </div>
        <p style={{ fontSize: 20, color: "#218380", margin: "0 0 0 20px" }}>
          Bus Tracker
        </p>
      </Col>
      <Col
        xs={24}
        md={12}
        lg={8}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div>
          <ScheduleOutlined style={{ fontSize: 80, color: "#e9c46a" }} />
        </div>
        <p style={{ fontSize: 20, color: "#218380", margin: "0 0 0 20px" }}>
          Manage Booking
        </p>
      </Col>
      <Col
        xs={24}
        md={12}
        lg={8}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div>
          <QuestionCircleOutlined style={{ fontSize: 80, color: "#e9c46a" }} />
        </div>
        <p style={{ fontSize: 20, color: "#218380", margin: "0 0 0 20px" }}>
          Help
        </p>
      </Col>
    </Row>
  </div>
);

export default AskButtons;
