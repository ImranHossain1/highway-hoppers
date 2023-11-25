"use client";
import React, { useState } from "react";
import dayjs from "dayjs";
import UMTable from "@/components/ui/UMTable";
import UMBreadCrumb from "@/components/ui/HHBreadCrumb";
import ActionBar from "@/components/ui/ActionBar";
import { Button, Input } from "antd";
import { useDebounced } from "@/redux/hooks";
import Link from "next/link";
import { ReloadOutlined } from "@ant-design/icons";
import { useDriverListQuery } from "@/redux/api/driverApi";
const DriverList = () => {
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

  const { data, isLoading } = useDriverListQuery({ ...query });
  const drivers = data?.drivers;
  const meta = data?.meta;

  const filteredDrivers = drivers?.filter((driver: any) => {
    const searchFields = [
      "salary",
      "user.name",
      "user.contactNo",
      "user.email",
      "user.gender",
    ];

    // Check if the search term matches any of the specified fields
    return searchFields.some((field) =>
      String(getNestedValue(driver, field))
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  });
  const columns = [
    {
      title: "Driver Name",
      dataIndex: "user",
      render: function (data: any) {
        return data && data.name;
      },
    },
    {
      title: "Driver Email",
      dataIndex: "user",
      render: function (data: any) {
        return data && data.email;
      },
    },
    {
      title: "Salary",
      dataIndex: "salary",
      sorter: true,
    },
    {
      title: "Contact Number",
      dataIndex: "user",
      render: function (data: any) {
        return data && data.contactNo;
      },
    },
    {
      title: "Rating",
      dataIndex: "rating",
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
  ];

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
      <ActionBar title="Driver List">
        <div>
          <Link href="/admin/driver-list/create">
            <Button type="primary">Create New Driver</Button>
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
        dataSource={filteredDrivers}
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

export default DriverList;
