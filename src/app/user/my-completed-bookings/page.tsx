"use client";
import { useGetUserCompletedBookingsQuery } from "@/redux/api/bookingApi";
import React, { useState } from "react";
import dayjs from "dayjs";
import UMTable from "@/components/ui/UMTable";
import UMBreadCrumb from "@/components/ui/HHBreadCrumb";
import ActionBar from "@/components/ui/ActionBar";
import { Button, Col, Rate, Row, Space, Tooltip, message } from "antd";
import HHModal from "@/components/ui/HHModal";
import TextArea from "antd/es/input/TextArea";
import {
  useDeleteReviewMutation,
  usePostReviewMutation,
  useUpdateReviewMutation,
} from "@/redux/api/reviewApi";
import { DeleteOutlined } from "@ant-design/icons";
const desc = ["terrible", "bad", "normal", "good", "wonderful"];
const MyBookings = () => {
  const query: Record<string, any> = {};
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [open, setOpen] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [bookingId, setBookingId] = useState<string>("");
  const [reviewId, setReviewId] = useState<string>("");
  const [reviewText, setReviewText] = useState("");
  const [updateReviewText, setUpdateReviewText] = useState("");
  const [rating, setRating] = useState(3);
  const [updateRating, setUpdateRating] = useState(3);
  const [actionType, setActionType] = useState<string>("");
  const [modalMessage, setModalMessage] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  const { data, isLoading, refetch } = useGetUserCompletedBookingsQuery({});
  const all_bookings = data?.data;

  const [postReview] = usePostReviewMutation();
  const [updateReview] = useUpdateReviewMutation();
  const [deleteReview] = useDeleteReviewMutation();

  const addReview = async () => {
    const reviewData = {
      review: reviewText,
      rating: rating,
    };

    message.success("Updating...");
    try {
      const res = await postReview({
        ...reviewData,
        id: bookingId,
      }).unwrap();
      if (res?.success === true) {
        message.success(res?.message);
        setReviewText("");
        setRating(3);
        setOpen(false);
        refetch();
      } else {
        message.error(res?.message);
      }
    } catch (err: any) {
      message.error(err);
    }
  };
  const updateUserReview = async () => {
    const reviewData = {
      review: updateReviewText,
      rating: updateRating,
    };
    message.success("Updating...");
    try {
      const res = await updateReview({
        ...reviewData,
        id: reviewId,
      }).unwrap();
      if (res?.success === true) {
        message.success(res?.message);
        setReviewText("");
        setRating(3);
        refetch();
        setOpen(false);
      } else {
        message.error(res?.message);
      }
    } catch (err: any) {
      message.error(err);
    }
  };
  const deleteUserReview = async (id: any) => {
    message.success("Deleting...");
    try {
      const res = await deleteReview(id).unwrap();
      if (res?.success === true) {
        message.success(res?.message);
        setReviewText("");
        setRating(3);
        refetch();
        setOpen(false);
      } else {
        message.error(res?.message);
      }
    } catch (err: any) {
      message.error(err);
    }
  };
  //console.log(data);
  const columns = [
    {
      title: "Sit Number",
      dataIndex: "Bus_Sit",
      render: function (data: any) {
        return data && data.sitNumber;
      },
      sorter: true,
    },
    {
      title: "Start Time",
      dataIndex: "bus_Schedule",
      render: function (data: any) {
        return data && data.startTime;
      },
      sorter: true,
    },
    {
      title: "Journey Date",
      dataIndex: "bus_Schedule",
      render: function (data: any) {
        return data && data.startDate;
      },
      sorter: true,
    },
    {
      title: "Driver Name",
      dataIndex: "bus_Schedule",
      render: function (data: any) {
        return data && data.driver.user.name;
      },
      sorter: true,
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Review",
      // dataIndex: "review",
      render: function (data: any) {
        return data.review ? (
          <>
            <Tooltip
              title={data.review.review}
              color="#218380"
              key={data.review.id}
            >
              <Rate disabled defaultValue={data.review.rating} />
            </Tooltip>
            <Button
              onClick={() => {
                setOpen(true);
                setReviewId(data.review.id);
                setUpdateReviewText(data.review.review);
                setUpdateRating(data.review.rating);
                setModalTitle("Update your review");
                setActionType("update");
              }}
              type="primary"
              style={{ marginLeft: "10px", backgroundColor: "#218380" }}
            >
              Update Review
            </Button>
            <Button
              onClick={() => {
                setOpen(true);
                setReviewId(data.review.id);
                setModalMessage("Are you sure you want to delete this Review?");
                setModalTitle("Delete Review");
                setActionType("delete");
              }}
              type="primary"
              style={{ marginLeft: "10px" }}
              danger
            >
              <DeleteOutlined />
            </Button>
          </>
        ) : (
          <Button
            onClick={() => {
              setOpen(true);
              setBookingId(data.id);
              setModalTitle("Give us a review how we did that?");
              setActionType("post");
            }}
            type="primary"
          >
            Review
          </Button>
        );
      },
    },
  ];
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "User",
            link: "/user",
          },
        ]}
      />
      <ActionBar title="My Journey History"></ActionBar>
      {!data?.success ? (
        <p style={{ marginTop: "10px", fontWeight: "700", color: "red" }}>
          {data?.message}
        </p>
      ) : (
        <>
          <UMTable
            loading={isLoading}
            columns={columns}
            dataSource={all_bookings}
            pageSize={size}
            showSizeChanger={true}
            showPagination={true}
          />

          <HHModal
            title={modalTitle}
            isOpen={open}
            closeModal={() => setOpen(false)}
            handleOk={() => {
              if (actionType === "post") {
                addReview();
              } else if (actionType === "update") {
                updateUserReview();
              } else if (actionType === "delete") {
                deleteUserReview(reviewId);
              }
            }}
          >
            {actionType === "delete" ? (
              <p className="my-5">{modalMessage}</p>
            ) : (
              <>
                <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                  <Col span={12} style={{ margin: "15px 0" }}>
                    <TextArea
                      placeholder="Tell us how we did that?"
                      autoSize={{ minRows: 2, maxRows: 6 }}
                      value={
                        actionType === "post"
                          ? reviewText
                          : actionType === "update"
                          ? updateReviewText
                          : ""
                      }
                      onChange={(e) =>
                        actionType === "post"
                          ? setReviewText(e.target.value)
                          : actionType === "update"
                          ? setUpdateReviewText(e.target.value)
                          : undefined
                      }
                    />
                  </Col>
                </Row>
                <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                  <Space>
                    <Rate
                      tooltips={desc}
                      onChange={
                        actionType === "post"
                          ? setRating
                          : actionType === "update"
                          ? setUpdateRating
                          : undefined
                      }
                      value={
                        actionType === "post"
                          ? +rating
                          : actionType === "update"
                          ? +updateRating
                          : undefined
                      }
                    />
                    {rating ? <span>{desc[rating - 1]}</span> : ""}
                  </Space>
                </Row>
              </>
            )}
          </HHModal>
        </>
      )}
    </div>
  );
};

export default MyBookings;
