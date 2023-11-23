"use client";
import TableRow from "@/components/ui/TableRow";

import React, { useState } from "react";
import dayjs from "dayjs";
import UMTable from "@/components/ui/UMTable";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import ActionBar from "@/components/ui/ActionBar";
import { Button, Input } from "antd";
import { useDebounced } from "@/redux/hooks";
import Link from "next/link";
import { ReloadOutlined } from "@ant-design/icons";
import { useSchedulesQuery } from "@/redux/api/scheduleApi";
const BusSchedules = () => {
  const query: Record<string, any> = {};
  const [size, setSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const getNestedValue = (obj: any, path: any) => {
    const keys = path.split(".");
    return keys.reduce(
      (acc: any, key: any) =>
        acc && acc[key] !== undefined ? acc[key] : undefined,
      obj
    );
  };

  const { data, isLoading } = useSchedulesQuery({ ...query });
  const schedules = data?.schedules;
  const meta = data?.meta;

  const filteredSchedules = schedules?.filter((schedule: any) => {
    const searchFields = [
      "bus.busNumber",
      "bus.totalSit",
      "busFare",
      "startingPoint",
      "endPoint",
      "startTime",
      "startDate",
      "dayOfWeek",
      "status",
      "driver.user.name",
    ];

    // Check if the search term matches any of the specified fields
    return searchFields.some((field) =>
      String(getNestedValue(schedule, field))
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  });
  const columns = [
    {
      title: "Bus Number",
      dataIndex: "bus",
      render: function (data: any) {
        return data && data.busNumber;
      },
    },
    {
      title: "Total Sit",
      dataIndex: "bus",
      render: function (data: any) {
        return data && data.totalSit;
      },
    },
    {
      title: "Fare",
      dataIndex: "busFare",
    },
    {
      title: "Start Point",
      dataIndex: "startingPoint",
    },
    {
      title: "End Point",
      dataIndex: "endPoint",
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
    },
    {
      title: "Day of Week",
      dataIndex: "dayOfWeek",
    },
    {
      title: "Journey Status",
      dataIndex: "status",
    },
    {
      title: "Driver Name",
      dataIndex: "driver",
      render: function (data: any) {
        return data && data.user.name;
      },
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
  ];
  /* const filteredBookings = bookings?.filter((booking) =>
    booking.user.name.toLowerCase().includes(searchTerm.toLowerCase())
  ); */
  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("page", page, "pageSize", pageSize);
    setPage(page);
    setSize(pageSize);
  };

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "admin",
            link: "/admin",
          },
        ]}
      />
      <ActionBar title="All Booking List">
        <Input
          type="text"
          size="large"
          placeholder="Search...."
          style={{ width: "20%" }}
          key={searchTerm} // Use searchTerm as the key
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />

        <div>
          <Link href="/admin/bus-schedules/create">
            <Button type="primary">Create New Schedule</Button>
          </Link>

          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              type="primary"
              style={{ margin: "0px 5px" }}
              onClick={resetFilters}
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBar>
      <UMTable
        columns={columns}
        loading={isLoading}
        dataSource={filteredSchedules}
        pageSize={size}
        total={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default BusSchedules;
