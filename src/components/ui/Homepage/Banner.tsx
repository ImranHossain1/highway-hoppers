import React from "react";
import { Layout, Typography, Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import SearchField from "../SearchField";
import style from "./homepage.module.css";
const Banner = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingBottom: "56.25%", // 16:9 aspect ratio (adjust as needed)
        filter: "contrast(70%)",
      }}
    >
      <Image
        src="/assets/bus-1.jpg"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
      />
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Center the content
          textAlign: "center",
          width: "100%",
        }}
      >
        <p
          className={style.banner}
          style={{
            fontSize: "1.3rem",
            fontWeight: 600,
            textTransform: "uppercase",
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          TRAVEL IS NEVER A MATTER OF MONEY, BUT OF COURAGE
        </p>
        <p
          className={style.banner}
          style={{
            marginTop: "10px",
            fontSize: "1.2rem",
            fontWeight: 600,
            textTransform: "uppercase",
            padding: "15px",
            color: "#780116",
            borderRadius: "10px",
            // background: "rgba(255, 255, 255, 0.2)",
          }}
        >
          Find your next destination by{" "}
          <span style={{ color: "#218380" }}>Highway Hoppers</span>
        </p>
        {/* <Link href="/book-now">
          <Button
            type="primary"
            htmlType="submit"
            style={{
              marginTop: "10px",

              color: "#e9c46a",
              backgroundColor: "#218380",
            }}
          >
            Book Now
          </Button>
        </Link> */}
      </div>
    </div>
  );
};

export default Banner;
