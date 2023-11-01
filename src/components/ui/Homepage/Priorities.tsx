"use client";
import React from "react";
import { Col, Row } from "antd";
import {
  ApiOutlined,
  HeartOutlined,
  RightOutlined,
  SafetyOutlined,
  WifiOutlined,
} from "@ant-design/icons";

const Priorities = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
    }}
  >
    <Row style={{ width: "70%", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
      <Col xs={24} md={12} lg={6}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
            textAlign: "center",
            margin: "20px 10px",
          }}
        >
          <div>
            <SafetyOutlined style={{ fontSize: 50, color: "#e9c46a" }} />
          </div>
          <h3 style={{ color: "#218380" }}>Health and Safety</h3>
          <p style={{ margin: "0 20px" }}>
            Keep yourself and others safe while traveling with us.
          </p>
          <p style={{ color: "#218380" }}>
            Learn More <RightOutlined />
          </p>
        </div>
      </Col>
      <Col xs={24} md={12} lg={6}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
            textAlign: "center",
            margin: "20px 10px",
          }}
        >
          <div>
            <WifiOutlined style={{ fontSize: 50, color: "#e9c46a" }} />
          </div>
          <h3 style={{ color: "#218380" }}>Comfort on board</h3>
          <p style={{ margin: "0 20px" }}>
            Our buses are equipped with large and comfortable seats, a toilet,
            Wi-Fi and power outlets.{" "}
          </p>
          <p style={{ color: "#218380", marginTop: "5px" }}>
            Learn More <RightOutlined />
          </p>
        </div>
      </Col>
      <Col xs={24} md={12} lg={6}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
            textAlign: "center",
            margin: "20px 10px",
          }}
        >
          <div>
            <ApiOutlined style={{ fontSize: 50, color: "#e9c46a" }} />
          </div>
          <h3 style={{ color: "#218380" }}>
            Largest bus network in Bangladesh
          </h3>
          <p style={{ margin: "0 20px" }}>
            Choose from over 3,000 travel destinations in 40+ countries and
            discover Europe with FlixBus.{" "}
          </p>
          <p style={{ color: "#218380", marginTop: "5px" }}>
            Our route network <RightOutlined />
          </p>
        </div>
      </Col>
      <Col xs={24} md={12} lg={6}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
            textAlign: "center",
            margin: "20px 10px",
          }}
        >
          <div>
            <HeartOutlined style={{ fontSize: 50, color: "#e9c46a" }} />
          </div>
          <h3 style={{ color: "#218380" }}>Travel environmentally-friendly</h3>
          <p style={{ margin: "0 20px" }}>
            Our efficient coaches are proven to have an excellent carbon
            footprint per driven passenger-kilometer.
          </p>
          <p style={{ color: "#218380" }}>
            Bus travel and environment <RightOutlined />
          </p>
        </div>
      </Col>
    </Row>
  </div>
);

export default Priorities;
