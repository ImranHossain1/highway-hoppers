"use client";

import { Button } from "antd";
import Link from "next/link";
import {
  ReloadOutlined,
  EyeOutlined,
  StepForwardOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useDebounced } from "@/redux/hooks";
import UMTable from "@/components/ui/UMTable";
import styles from "../ui/Homepage/homepage.module.css";
import { useSchedulesQuery } from "@/redux/api/scheduleApi";

type SearchOptions = {
  startingPoint?: string;
  endPoint?: string;
  startDate?: string;
};

const TableRow = ({ searchParams }: { searchParams?: SearchOptions }) => {
  const query: Record<string, any> = {};
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  let startingPoint = "";
  let startDate = "";
  let endPoint = "";

  if (searchParams) {
    if (searchParams.startingPoint) {
      startingPoint = searchParams.startingPoint;
    }

    if (searchParams.startDate) {
      startDate = searchParams.startDate;
    }

    if (searchParams.endPoint) {
      endPoint = searchParams.endPoint;
    }
  }

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["status"] = "Upcoming";
  if (startDate) {
    query["startDate"] = startDate;
  }

  if (endPoint) {
    query["endPoint"] = endPoint;
  }

  if (startingPoint) {
    query["startingPoint"] = startingPoint;
  }

  const { data, isLoading } = useSchedulesQuery({ ...query });
  const schedules = data?.schedules;
  const meta = data?.meta;
  const columns = [
    {
      title: "Start Point",
      dataIndex: "startingPoint",
    },
    {
      title: "End Point",
      dataIndex: "endPoint",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
    },
    {
      title: "End Time",
      dataIndex: "endTime",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
    },
    {
      title: "Bus Fare",
      dataIndex: "busFare",
      sorter: true,
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>
            <Link href={`/book-now/${data}`}>
              <Button type="primary">
                <StepForwardOutlined />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];
  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        className={styles.rawStyle}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "20px ",
        }}
      >
        <h1 style={{ textAlign: "center", margin: "10px 0" }}>
          Our Journey options
        </h1>

        <UMTable
          loading={isLoading}
          columns={columns}
          dataSource={schedules}
          pageSize={size}
          total={meta?.total}
          showSizeChanger={true}
          onPaginationChange={onPaginationChange}
          onTableChange={onTableChange}
          showPagination={true}
        />
      </div>
    </div>
  );
};

export default TableRow;
