"use client";
import React from "react";
import { Button, Col, Divider, Row, Typography } from "antd";
import {
  ApiOutlined,
  HeartOutlined,
  RightOutlined,
  SafetyOutlined,
  WifiOutlined,
} from "@ant-design/icons";
import Image from "next/image";
const { Title } = Typography;
const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };

const Discover: React.FC = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
    }}
  >
    <Row
      style={{
        width: "70%",
        border: "1px solid #e9c46a",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Col xs={24} md={12}>
        <Image
          height={1000}
          width={1000}
          src="/assets/map.jpeg"
          alt="Map"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Col>
      <Col xs={24} md={12}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
            textAlign: "center",
            margin: "20px 10px",
          }}
        >
          <h1 style={{ color: "#218380" }}>Discover All Destinations</h1>
          <p style={{ margin: "0 20px" }}>
            Choose from over 2000 travel destination in 60 Districts
          </p>
          <p style={{ color: "#218380", marginTop: "5px" }}>
            Explore the Map <RightOutlined />
          </p>
        </div>
      </Col>
    </Row>
  </div>
);

export default Discover;
