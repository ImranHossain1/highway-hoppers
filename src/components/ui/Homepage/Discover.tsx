"use client";
import React from "react";
import { Button, Col, Divider, Row, Typography } from "antd";
import { RightOutlined } from "@ant-design/icons";
import Image from "next/image";
import styles from "./homepage.module.css";

const Discover = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      height: "300px",
    }}
  >
    <Row className={styles.rawStyle}>
      <Col xs={12} sm={12} md={12}>
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
      <Col xs={12} sm={12} md={12}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            margin: "20px 10px",
            height: "100%", // To center the content vertically
          }}
        >
          <h1 style={{ color: "#218380" }}>Discover All Destinations</h1>
          <p style={{ margin: "10px 20px" }}>
            Choose from over 2000 travel destinations in 60 Districts
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
