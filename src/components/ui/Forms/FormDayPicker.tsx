import { DatePicker, DatePickerProps, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";

type UMDatePikerProps = {
  onChange?: (valOne: Dayjs | null, valTwo: string) => void;
  name: string;
  label?: string;
  value?: Dayjs;
  size?: "large" | "small";
};

const FormDayPicker = ({
  name,
  label,
  onChange,
  size = "large",
}: UMDatePikerProps) => {
  const { control, setValue } = useFormContext();

  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    console.log(dateString);
    setValue(name, dateString);
  };

  return (
    <div>
      {label ? label : null}
      <br />
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            defaultValue={field.value ? dayjs(field.value) : undefined}
            size={size}
            format="YYYY-MM-DD ddd"
            onChange={handleOnChange}
            style={{ width: "100%" }}
            renderExtraFooter={() => (
              <div>
                Day: {field.value ? dayjs(field.value).format("ddd") : ""}
              </div>
            )}
          />
        )}
      />
    </div>
  );
};

export default FormDayPicker;
