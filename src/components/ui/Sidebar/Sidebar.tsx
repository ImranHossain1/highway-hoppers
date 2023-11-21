"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { onSidebarClose } from "@/redux/slices/sidebarSlice";
import { Drawer, Layout, Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./Sidebar.module.css";
const { Content, Sider } = Layout;

const Sidebar = ({
  children,
  items,
}: {
  children: React.ReactNode;
  items: { key: string; label: string; href: string }[];
}) => {
  const open = useAppSelector((state) => state.sidebar.open);
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  const getSelectedKey = () => {
    return items.find((item) => item.href === pathname)?.key || "";
  };

  return (
    <Layout>
      <Content>
        <Layout>
          <div className={styles.sidebar}>
            <Sider
              width={250}
              style={{ minHeight: "100vh", background: "#e5e5e5" }}
            >
              <Menu
                style={{
                  height: "100%",
                  padding: "8px",
                  background: "transparent",
                }}
                mode="inline"
                defaultSelectedKeys={[getSelectedKey()]}
                selectedKeys={[getSelectedKey()]}
              >
                {items?.map((item) => (
                  <Menu.Item key={item.key}>
                    <Link href={item.href}>{item.label}</Link>
                  </Menu.Item>
                ))}
              </Menu>
            </Sider>
          </div>
          <Content style={{ background: "#ffffff", padding: "16px" }}>
            {children}
          </Content>
        </Layout>
        <div className={styles.hamburger}>
          <Layout>
            <Drawer
              title="Dashboard"
              placement="left"
              onClose={() => {
                dispatch(onSidebarClose());
              }}
              visible={open}
            >
              <Menu
                style={{ height: "100%", padding: "8px" }}
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
              >
                {items?.map((item) => (
                  <Menu.Item key={item.key}>
                    <Link href={item.href}>{item.label}</Link>
                  </Menu.Item>
                ))}
              </Menu>
            </Drawer>
          </Layout>
        </div>
      </Content>
    </Layout>
  );
};

export default Sidebar;

{
  /* */
}
