"use client";
import { Layout } from "antd";
import Header from "./Header";
import PublicHeader from "./PublicHeader";

const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "black",
        backgroundColor: "white",
      }}
    >
      <PublicHeader></PublicHeader>

      <div
        style={{
          padding: "10px",
        }}
      >
        {children}
      </div>
    </Content>
  );
};

export default Contents;
