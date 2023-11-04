"use client";
import { Button, Col, Divider, Row, message } from "antd";
import loginImage from "../../../assets/login-image.png";
import Image from "next/image";
import Form from "@/components/ui/Forms/Form";
import FormInput from "@/components/ui/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserSignUpMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import Link from "next/link";

type FormValues = {
  id: string;
  password: string;
};

const SignUpPage = () => {
  const router = useRouter();
  const [userSignUp] = useUserSignUpMutation();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await userSignUp({ ...data }).unwrap();

      if (res?.success === true) {
        message.success(res?.message);
        storeUserInfo({ accessToken: res?.data?.accessToken });
        router.push("/");
      } else {
        message.error(res?.message);
      }
    } catch (err: any) {
      message.error(err.data.message);
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt="login image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
          }}
        >
          First login your account
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="name"
                type="text"
                size="large"
                label="User Name"
              />
            </div>
            <div>
              <FormInput
                name="email"
                type="email"
                size="large"
                label="User Email"
              />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="User Password"
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "50%", color: "black" }}
              >
                Sign Up
              </Button>
              <Divider plain>Already Have An Account? </Divider>
              <Link href="/login" style={{ marginTop: "10px" }}>
                <Button
                  type="default"
                  htmlType="submit"
                  style={{
                    width: "50%",
                    backgroundColor: "#2a9d8f",
                    color: "white",
                  }}
                >
                  SIGN IN
                </Button>
              </Link>
            </div>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default SignUpPage;
