"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import StyledComponentsRegistry from "./AntdRegistry";
import { ConfigProvider } from "antd";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "#e9c46a",
            colorBgLayout: "#218380",
          },
        }}
      >
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </ConfigProvider>
    </Provider>
  );
};

export default Providers;
