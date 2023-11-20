"use client";
import React, { useState, useEffect } from "react";
import { Button, Drawer, Menu } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { Layout, Typography, theme } from "antd";
import Link from "next/link";
import { MenuOutlined } from "@ant-design/icons";
import { isLoggedIn, removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import dynamic from "next/dynamic";

const { Header, Content } = Layout;
const { Title } = Typography;

const Navbar = ({
  items,
  hasSider,
}: {
  items: { key: string; label: string; href: string }[];
  hasSider?: boolean;
}) => {
  const [userLoggedIn, setUserLoggedIn] = useState(isLoggedIn()); // Initialize userLoggedIn state

  const {
    token: { colorBgLayout },
  } = theme.useToken();
  const router = useRouter();
  const pathname = usePathname();
  const [showFullHeader, setShowFullHeader] = useState(true); // Initially, show the full header
  const [open, setOpen] = useState(false);
  const Login = dynamic(() => import("./Buttons/LoginButton"), { ssr: false });
  const Logout = dynamic(() => import("./Buttons/LogoutButton"), { ssr: false });
  const Dashboard = dynamic(() => import("./Buttons/DashboardButton"), {
    ssr: false,
  });
  const Signup = dynamic(() => import("./Buttons/SignupButton"), {
    ssr: false,
  });

  const logout = () => {
    removeUserInfo(authKey);
    setUserLoggedIn(false);
    // router.push("/login");
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Check the screen size and update the showFullHeader state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // Adjust this breakpoint as needed
        setShowFullHeader(false);
      } else {
        setShowFullHeader(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Layout className="layout" style={{ background: colorBgLayout }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          background: colorBgLayout,
        }}
      >
        {showFullHeader ? (
          <>
            <Content>
              <Link href="/home">
                <Title level={3} style={{ color: "white", marginBottom: 0 }}>
                  Highway Hoppers
                </Title>
              </Link>
            </Content>

            <Menu
              disabledOverflow
              theme="dark"
              mode="horizontal"
              selectedKeys={[pathname]}
              style={{ display: "block", background: colorBgLayout }}
            >
              {items?.map((item) => (
                <Menu.Item key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </Menu.Item>
              ))}
              {userLoggedIn ? (
                <>
                  <Menu.Item key="/dashboard">
                    <Dashboard />
                  </Menu.Item>
                  <Menu.Item>
                    <Logout onLogout={logout} />
                  </Menu.Item>
                </>
              ) : (
                <>
                  <Menu.Item key="/dashboard">
                    <Login />
                  </Menu.Item>
                  <Menu.Item>
                    <Signup />
                  </Menu.Item>
                </>
              )}
            </Menu>
          </>
        ) : (
          <>
            <Content>
              <Link href="/home">
                <Title level={3} style={{ color: "white", marginBottom: 0 }}>
                  HH
                </Title>
              </Link>
            </Content>
            <Button type="primary" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
            <Drawer
              title="Menu"
              placement="right"
              onClose={onClose}
              visible={open}
            >
              <Menu
                mode="vertical"
                selectedKeys={[pathname]}
                style={{ borderRight: 0 }}
              >
                {items?.map((item) => (
                  <Menu.Item key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </Menu.Item>
                ))}
                {userLoggedIn ? (
                  <>
                    <Menu.Item key="/dashboard">
                      <Dashboard />
                    </Menu.Item>
                    <Menu.Item>
                      <Logout onLogout={logout} />
                    </Menu.Item>
                  </>
                ) : (
                  <>
                    <Menu.Item key="/dashboard">
                      <Login />
                    </Menu.Item>
                    <Menu.Item>
                      <Signup />
                    </Menu.Item>
                  </>
                )}
              </Menu>
            </Drawer>
          </>
        )}
      </Header>
    </Layout>
  );
};

export default Navbar;
