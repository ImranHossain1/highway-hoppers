"use client";
import { Layout, Row, Col, Divider } from "antd";
import style from "../ui/Homepage/homepage.module.css";
import Image from "next/image";
const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer
      style={{
        background: "#218380",
        color: "#e9c46a",
        textAlign: "center",
      }}
    >
      <Row style={{ padding: "20px 20px" }} gutter={16}>
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
          <div style={{ textAlign: "left" }}>
            <h2 style={{ marginBottom: "3px" }}>Bus Travel</h2>
            <p style={{ marginBottom: "2px" }}>All Bus Destinations</p>
            <p style={{ marginBottom: "2px" }}>Route Map</p>
            <p style={{ marginBottom: "2px" }}>Overnight Buses</p>
            <p style={{ marginBottom: "2px" }}>Business Travel</p>
            <p style={{ marginBottom: "2px" }}>Get the App</p>
            <Divider className={style.footer} />
          </div>
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
          <div style={{ textAlign: "left" }}>
            <h2 style={{ marginBottom: "2px" }}>Discover</h2>
            <p style={{ marginBottom: "2px" }}>Bus to Dhaka</p>
            <p style={{ marginBottom: "2px" }}>Bus to Khulna</p>
            <p style={{ marginBottom: "2px" }}>Bus to Comilla</p>
            <p style={{ marginBottom: "2px" }}>Bus to Sylhet</p>
            <p style={{ marginBottom: "2px" }}>Bus to Chottogram</p>
            <p style={{ marginBottom: "2px" }}>Bus to Rajshahi</p>
            <p style={{ marginBottom: "2px" }}>Bus to Chandpur</p>
            <Divider className={style.footer} />
          </div>
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
          <div style={{ textAlign: "left" }}>
            <h2 style={{ marginBottom: "2px" }}>Highway Hopper</h2>
            <p style={{ marginBottom: "2px" }}>About Highway Hoppers</p>
            <p style={{ marginBottom: "2px" }}>Jobs</p>
            <p style={{ marginBottom: "2px" }}>Press Room</p>
            <p style={{ marginBottom: "2px" }}>Photo Credits</p>
            <p style={{ marginBottom: "2px" }}>Responsible Disclosure</p>
            <Divider className={style.footer} />
          </div>
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
          <div style={{ textAlign: "left" }}>
            <h2 style={{ marginBottom: "2px" }}>Customer Service</h2>
            <p style={{ marginBottom: "2px" }}>Help</p>
            <p style={{ marginBottom: "2px" }}>Services</p>
            <p style={{ marginBottom: "2px" }}>Manage My Booking</p>
            <p style={{ marginBottom: "2px" }}>Bike Transportation</p>
            <p style={{ marginBottom: "2px" }}>Seat Reservations</p>
            <p style={{ marginBottom: "2px" }}>Luggage</p>
            <Divider className={style.footer} />
          </div>
        </Col>
      </Row>
      <Divider></Divider>

      <div className={style.footerImage}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ margin: "0 10px 0 0" }}>
            <Image
              src="/assets/googleplay.svg"
              alt="google play"
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/assets/appstore.svg"
              alt="google play"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div style={{ textAlign: "center", padding: "20px 0" }}>
          &copy; Md Imran Hossain. All rights reserved.
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
