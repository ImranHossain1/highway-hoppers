import React from "react";
import { Layout, Typography, Button } from "antd";
import Image from "next/image";
import Link from "next/link";

const { Header, Content } = Layout;

const Banner = () => {
  return (
    <div
      style={{
        backgroundPosition: "center",
        height: "80vh",
        position: "relative",
      }}
    >
      <Image
        height={2000}
        width={2000}
        src="/assets/bus-1.jpg"
        alt="Hero Background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "contrast(50%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontSize: "1.875rem",
            fontWeight: 600,
            textTransform: "uppercase",
            background: "rgba(255, 255, 255, 0.2)",

            padding: "15px",
            borderRadius: "10px",
          }}
        >
          TRAVEL IS NEVER A MATTER OF MONEY, BUT OF COURAGE
        </p>
        <p
          style={{
            marginTop: "10px",
            fontSize: "1.875rem",
            fontWeight: 800,
            textTransform: "uppercase",
            padding: "15px",
            color: "#218380",
            borderRadius: "10px",
            background: "rgba(255, 255, 255, 0.2)",
          }}
        >
          Low cost bus travel from just €5
        </p>
        <Link href="/book-now">
          <Button
            type="primary"
            htmlType="submit"
            style={{
              marginTop: "10px",
              width: "100%",
              color: "#e9c46a",
              backgroundColor: "#218380",
            }}
          >
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
