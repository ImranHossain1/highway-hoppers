"use client";
import React, { useState, useEffect } from "react";
import { Button, Drawer, Menu } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { Layout, Typography, theme } from "antd";
import Link from "next/link";
import { MenuOutlined } from "@ant-design/icons";
import { isLoggedIn, removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";

const { Header, Content } = Layout;
const { Title } = Typography;

const Navbar = ({
  items,
  hasSider,
}: {
  items: { key: string; label: string; href: string }[];
  hasSider?: boolean;
}) => {
  const userLoggedIn = isLoggedIn();

  const {
    token: { colorBgLayout },
  } = theme.useToken();
  const router = useRouter();
  const pathname = usePathname();
  const [showFullHeader, setShowFullHeader] = useState(true); // Initially, show the full header
  const [open, setOpen] = useState(false);

  const logout = () => {
    removeUserInfo(authKey);
    router.push("/login");
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
                    <Link href="/dashboard">Dashboard</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Button type="primary" onClick={logout} danger>
                      Logout
                    </Button>
                  </Menu.Item>
                </>
              ) : (
                <>
                  <Menu.Item>
                    <Button
                      type="primary"
                      onClick={() => {
                        router.push("/login");
                      }}
                    >
                      Sign In
                    </Button>
                  </Menu.Item>
                  <Menu.Item>
                    <Button
                      type="primary"
                      onClick={() => {
                        router.push("/signup");
                      }}
                    >
                      Sign Up
                    </Button>
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
                      <Link href="/dashboard">Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Button type="primary" onClick={logout}>
                        Logout
                      </Button>
                    </Menu.Item>
                  </>
                ) : (
                  <>
                    <Menu.Item>
                      <Button
                        type="primary"
                        onClick={() => {
                          router.push("/login");
                        }}
                      >
                        Sign In
                      </Button>
                    </Menu.Item>
                    <Menu.Item>
                      <Button
                        type="primary"
                        onClick={() => {
                          router.push("/signup");
                        }}
                      >
                        Sign Up
                      </Button>
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
