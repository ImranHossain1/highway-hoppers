"use client";
import Loading from "@/app/loading";
import Form from "@/components/ui/Forms/Form";
import FormInput from "@/components/ui/Forms/FormInput";
import {
  useAvailableSitsQuery,
  useSingleScheduleQuery,
} from "@/redux/api/scheduleApi";
import { useUserProfileQuery } from "@/redux/api/userApi";
import { isLoggedIn } from "@/services/auth.service";
import { Button, Col, Divider, Row, Space, Spin, message } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "../../../../components/ui/Homepage/homepage.module.css";
import { useGetSingleBusQuery } from "@/redux/api/busApi";
import {
  BookOutlined,
  CheckCircleOutlined,
  EuroCircleOutlined,
  MailOutlined,
  PhoneOutlined,
  StarFilled,
  StarTwoTone,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useAddBookingMutation } from "@/redux/api/bookingApi";

type IDProps = {
  params: any;
};
const BookReservation = ({ params }: IDProps) => {
  const { id } = params;
  const userLoggedIn = isLoggedIn();
  // const { email } = getUserInfo() as any;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [clickedButtons, setClickedButtons] = useState<any>({});
  const [selectedSeatsCount, setSelectedSeatsCount] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [selectedSeats, setSelectedSeats] = useState<
    Array<{ bus_SitId: string }>
  >([]);
  const {
    data,
    isError: scheduleError,
    isLoading: scheduleLoading,
  } = useSingleScheduleQuery(id);
  const {
    data: availableSit,
    isError: availableSitError,
    isLoading: availableSitLoading,
  } = useAvailableSitsQuery(id);
  const {
    data: bus,
    isError: busError,
    isLoading: busLoading,
  } = useGetSingleBusQuery(data?.data?.busId);

  const {
    data: userData,
    isLoading: userLoading,
    isError: userError,
  } = useUserProfileQuery({});

  useEffect(() => {
    if (userLoggedIn) {
      if (availableSitError) {
        setIsLoading(true);
        console.log("Error loading availableSit data:", availableSitError);
        // You can show an error message here if needed
      } else if (availableSit) {
        setIsLoading(false);
      }
    } else {
      router.push("/login");
    }
  }, [router, userLoggedIn, availableSit, availableSitError]);

  function renderStarRating(rating: number) {
    const maxStars = 5;
    const filledStars = (rating / 5) * maxStars;
    const hasHalfStar = rating - Math.floor(rating) >= 0.5;
    const stars = [];

    for (let i = 0; i < maxStars; i++) {
      if (i < filledStars) {
        stars.push(
          <StarFilled key={`star-${i}`} style={{ color: "orange" }} />
        );
      } else if (hasHalfStar && i === Math.floor(rating)) {
        stars.push(<StarTwoTone key="half-star" twoToneColor="orange" />);
      } else {
        stars.push(<StarFilled key={`star-${i}`} style={{ color: "gray" }} />);
      }
    }

    return stars;
  }
  const rating = data?.data?.driver?.rating;
  const starRating = renderStarRating(rating);

  const handleButtonClick = (sitId: string) => {
    if (clickedButtons[sitId]) {
      // Button was previously clicked, set it back to the previous color
      setClickedButtons((prevClickedButtons: any) => ({
        ...prevClickedButtons,
        [sitId]: false,
      }));
      setSelectedSeatsCount(selectedSeatsCount - 1);

      // Remove the seat from the selectedSeats array
      setSelectedSeats((prevSelectedSeats) =>
        prevSelectedSeats.filter(
          (selectedSeat) => selectedSeat.bus_SitId !== sitId
        )
      );
    } else {
      // Button was not previously clicked, set it to red
      setClickedButtons((prevClickedButtons: any) => ({
        ...prevClickedButtons,
        [sitId]: true,
      }));
      setSelectedSeatsCount(selectedSeatsCount + 1);

      // Add the seat to the selectedSeats array
      setSelectedSeats((prevSelectedSeats) => [
        ...prevSelectedSeats,
        { bus_SitId: sitId },
      ]);
    }
  };
  useEffect(() => {
    // Calculate the total price whenever selectedSeatsCount changes
    if (data?.data?.busFare !== undefined) {
      setTotalPrice(selectedSeatsCount * data?.data?.busFare);
    }
  }, [
    selectedSeatsCount,
    data,
    scheduleLoading,
    userLoading,
    availableSitLoading,
    busLoading,
  ]);

  const [addBooking] = useAddBookingMutation();

  const makeBooking = async () => {
    const bookingData = {
      sits: selectedSeats,
      busScheduleId: data?.data?.id,
    };
    try {
      const res = await addBooking(bookingData).unwrap();
      if (res.statusCode == 200) {
        router.push("dashboard/user");
        message.success(res.message);
      }
    } catch (error: any) {
      message.error(error.data.message);
    }
  };

  if (isLoading) {
    <Row
      justify="center"
      align="middle"
      style={{
        height: "100vh",
      }}
    >
      <Space>
        <Spin tip="Loading" size="large"></Spin>
      </Space>
    </Row>;
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center horizontally
        justifyContent: "center", // Center vertically
        padding: "20px 0",
      }}
    >
      <div
        className={styles.bookingStyle}
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Row gutter={[16, 16]} style={{ width: "100%" }}>
          <Col xs={24} md={8} lg={16} className="gutter-row">
            <div
              style={{
                margin: "20px 0",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                padding: "20px",
                borderRadius: "8px",
              }}
            >
              <h1 style={{ marginBottom: "10px" }}>
                <BookOutlined
                  style={{ color: "#218380", marginRight: "10px" }}
                />
                Choose your seats
                {data?.data?.status !== "Upcoming" && (
                  <span style={{ color: "red" }}>
                    (This Journey is already finished)
                  </span>
                )}
              </h1>
              <Row gutter={[16, 16]}>
                {bus?.data?.bus_Sits.map((sit: any, index: number) => (
                  <Col
                    key={sit.id}
                    xs={12}
                    md={6}
                    lg={6}
                    className="gutter-row"
                  >
                    <Button
                      type={clickedButtons[sit.id] ? "default" : "primary"}
                      onClick={() => {
                        handleButtonClick(sit.id);
                      }}
                      disabled={
                        !availableSit?.data?.some(
                          (available: any) =>
                            available.sitNumber === sit.sitNumber
                        )
                      }
                    >
                      {sit.sitNumber}
                    </Button>
                  </Col>
                ))}
              </Row>
            </div>
            <div
              style={{
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                padding: "20px",
                borderRadius: "8px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <h1 style={{ marginBottom: "10px" }}>
                  <UserOutlined
                    style={{ color: "#218380", marginRight: "10px" }}
                  />
                  Passenger Info
                </h1>
              </div>
              <div style={{ margin: "10px 0 0 10px" }}>
                <p style={{ fontSize: 20, fontWeight: 500 }}>
                  <span style={{ marginRight: "5px" }}>
                    <UserOutlined style={{ color: "#e9c46a" }} /> Name:
                  </span>
                  <span style={{ fontWeight: 700 }}>
                    {userData?.data?.name}
                  </span>
                </p>
                <p style={{ fontSize: 20, fontWeight: 500, margin: "10px 0" }}>
                  <span style={{ marginRight: "5px" }}>
                    <MailOutlined style={{ color: "#e9c46a" }} /> Email:
                  </span>
                  <span style={{ fontWeight: 700 }}>
                    {userData?.data?.email}
                  </span>
                </p>
                <p style={{ fontSize: 20, fontWeight: 500 }}>
                  <span style={{ marginRight: "5px" }}>
                    <PhoneOutlined style={{ color: "#e9c46a" }} /> Contact No:
                  </span>
                  <span style={{ fontWeight: 700 }}>
                    {userData?.data?.contactNo}
                  </span>
                </p>
              </div>
            </div>
            <div
              style={{
                margin: "20px 0",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                padding: "20px",
                borderRadius: "8px",
              }}
            >
              <h1 style={{ marginBottom: "10px" }}>
                <CheckCircleOutlined
                  style={{ color: "#218380", marginRight: "10px" }}
                />
                Bus Details
              </h1>

              <div style={{ marginTop: "10px" }}>
                <Row gutter={[16, 16]} style={{ margin: "0 20px" }}>
                  <Col lg={12}>
                    <h3>Journey Date: {data?.data?.startDate}</h3>
                  </Col>
                  <Col lg={12}>
                    <h3>End Date: {data?.data?.endDate}</h3>
                  </Col>
                  <Col lg={12}>
                    <h3>Day of journey: {data?.data?.dayOfWeek}</h3>
                  </Col>
                  <Col lg={12}>
                    <h3>
                      Sit Fare:{" "}
                      <EuroCircleOutlined style={{ marginRight: "5px" }} />
                      {data?.data?.busFare}
                    </h3>
                  </Col>
                  <Col lg={12}>
                    <h3>Start Time: {data?.data?.startTime}</h3>
                  </Col>
                  <Col lg={12}>
                    <h3>End Time: {data?.data?.endTime}</h3>
                  </Col>
                  <Col lg={12}>
                    <h3>Start Point: {data?.data?.startingPoint}</h3>
                  </Col>
                  <Col lg={12}>
                    <h3>Destination: {data?.data?.endPoint}</h3>
                  </Col>

                  <Col lg={12}></Col>
                </Row>
              </div>
            </div>
            <div
              style={{
                margin: "20px 0",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                padding: "20px",
                borderRadius: "8px",
              }}
            >
              <h1 style={{ marginBottom: "10px" }}>
                <TeamOutlined
                  style={{ color: "#218380", marginRight: "10px" }}
                />
                Driver Details
              </h1>

              <div style={{ marginTop: "10px" }}>
                <Row gutter={[16, 16]} style={{ margin: "0 20px" }}>
                  <Col lg={12}>
                    <h3>Driver Name: {data?.data?.driver?.user?.name}</h3>
                  </Col>
                  <Col lg={12}>
                    <h3>
                      Driver Date Of Birth: {data?.data?.driver?.user?.DOB}
                    </h3>
                  </Col>
                  <Col lg={12}>
                    <h3>Driver Rating: {starRating}</h3>
                  </Col>
                  <Col lg={12}>
                    <h3>Gender: {data?.data?.driver?.user?.gender}</h3>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>

          <Col xs={24} md={8} lg={8} className="gutter-row">
            <div
              style={{
                margin: "20px 0",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                padding: "20px",
                borderRadius: "8px",
              }}
            >
              <h1 style={{ marginBottom: "15px" }}>
                <BookOutlined
                  style={{ color: "#218380", marginRight: "10px" }}
                />
                Your Booking
              </h1>
              <div>
                <Row gutter={[16, 16]}>
                  <Col span={12} className="gutter-row">
                    Bus Fare
                  </Col>
                  <Col
                    span={12}
                    className="gutter-row"
                    style={{ textAlign: "right" }}
                  >
                    <h3>500</h3>
                  </Col>
                  <Col span={12} className="gutter-row">
                    Sit Number
                  </Col>
                  <Col
                    span={12}
                    className="gutter-row"
                    style={{ textAlign: "right" }}
                  >
                    <h3>{selectedSeatsCount}</h3>
                  </Col>
                  <Divider style={{ margin: "0" }} />
                  <Col span={12} className="gutter-row">
                    Total Price
                  </Col>
                  <Col
                    span={12}
                    className="gutter-row"
                    style={{ textAlign: "right" }}
                  >
                    <h3>{totalPrice}</h3>
                  </Col>
                </Row>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <Button
                  type="primary"
                  onClick={makeBooking}
                  disabled={selectedSeatsCount === 0}
                >
                  Book your seats now
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BookReservation;
