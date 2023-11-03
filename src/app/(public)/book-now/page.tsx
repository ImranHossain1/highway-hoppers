"use client";
import SearchField from "@/components/ui/SearchField";
import TableRow from "@/components/ui/TableRow";
import React from "react";

const Book = (props: any) => {
  const { searchParams } = props;
  return (
    <div>
      <SearchField searchParams={searchParams} />
      <TableRow searchParams={searchParams} />
    </div>
  );
};

export default Book;
