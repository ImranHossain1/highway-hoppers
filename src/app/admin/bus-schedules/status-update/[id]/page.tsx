"use client";

import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import FormTimePicker from "@/components/Forms/FormTimePicker";
import UMBreadCrumb from "@/components/ui/HHBreadCrumb";
import {
  WeekDays,
  busScheduleStatus,
  days,
  daysOptions,
  genderOptions,
  pointsOption,
} from "@/constants/global";
import {
  useAddScheduleMutation,
  useSchedulesQuery,
  useSingleScheduleQuery,
  useUpdateScheduleMutation,
  useUpdateStatusMutation,
} from "@/redux/api/scheduleApi";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";
import { DatePicker, Space } from "antd";
import FormDayPicker from "@/components/Forms/FormDayPicker";
import DriverField from "@/components/Forms/DriverField";
import BusField from "@/components/Forms/BusField";
type IDProps = {
  params: any;
};
const UpdateSchedule = ({ params }: IDProps) => {
  const { id } = params;
  const router = useRouter();
  const { data, isLoading } = useSingleScheduleQuery(id);
  const scheduleData = data?.data;
  const [updateStatus] = useUpdateStatusMutation();

  const onSubmit = async (data: any) => {
    data.id = scheduleData?.id;

    message.success("Updating...");

    try {
      const res = await updateStatus(data).unwrap();
      if (res?.success === true) {
        message.success(res?.message);
        router.push("/admin/bus-schedules");
      } else {
        message.error(res?.message);
      }
    } catch (err: any) {
      console.log(err);
      message.error(err);
    }
  };

  const defaultValues: {
    status: string;
  } = {
    status: scheduleData?.status,
  };
  const base = "admin";
  return (
    <>
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "schedules", link: `/${base}/bus-schedules` },
        ]}
      />
      <h1 style={{ margin: "15px 0" }}>Update Bus Schedules Status</h1>
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        {/* faculty information */}
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col span={8} style={{ margin: "10px 0" }}>
              <FormSelectField
                name="status"
                label="Bus Schedule Status"
                options={busScheduleStatus}
              />
            </Col>
          </Row>
        </div>

        <Button htmlType="submit" type="primary">
          submit
        </Button>
      </Form>
    </>
  );
};

export default UpdateSchedule;
