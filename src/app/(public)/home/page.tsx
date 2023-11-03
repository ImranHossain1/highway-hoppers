import AskButtons from "@/components/ui/Homepage/AskButtons";
import Banner from "@/components/ui/Homepage/Banner";
import Discover from "@/components/ui/Homepage/Discover";
import Drivers from "@/components/ui/Homepage/Drivers";
import Info from "@/components/ui/Homepage/Info";
import Priorities from "@/components/ui/Homepage/Priorities";
import SearchField from "@/components/ui/SearchField";
import { Divider } from "antd";

import React from "react";

const Home = () => {
  const searchParams = {
    startingPoint: "",
    endPoint: "",
    startDate: "",
  };
  return (
    <>
      <Banner />
      <SearchField searchParams={searchParams}></SearchField>
      <Divider></Divider>
      <Discover />
      <Divider></Divider>
      <Priorities />
      <Divider></Divider>
      <Info />
      <Divider></Divider>
      {/* <Drivers /> */}
      <Divider></Divider>

      <AskButtons />
      <Divider></Divider>
    </>
  );
};

export default Home;
