"use client";
import TableRow from "@/components/ui/TableRow";
import { useGetUserPendingBookingsQuery } from "@/redux/api/bookingApi";
import { useSchedulesQuery } from "@/redux/api/scheduleApi";
import React, { useState } from "react";

const MyPendingBookings = () => {
  const query: Record<string, any> = {};
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);

  query["limit"] = size;
  query["page"] = page;
  const { data, isLoading } = useGetUserPendingBookingsQuery({});
  console.log(data);
  return <div></div>;
};

export default MyPendingBookings;
