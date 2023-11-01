import AskButtons from "@/components/ui/Homepage/AskButtons";
import Banner from "@/components/ui/Homepage/Banner";
import Discover from "@/components/ui/Homepage/Discover";
import Info from "@/components/ui/Homepage/Info";
import Priorities from "@/components/ui/Homepage/Priorities";
import { Divider } from "antd";

import React from "react";

const Home = () => {
  return (
    <>
      <Banner />
      <div style={{ margin: "10px 20px" }}>
        <AskButtons />
        <Divider></Divider>
        <Discover />
        <Divider></Divider>
        <Priorities />
        <Divider></Divider>
        <Info />
      </div>
    </>
  );
};

export default Home;
