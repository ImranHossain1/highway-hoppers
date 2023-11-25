import FormSelectField, { SelectOptions } from "./FormSelectField";
import { useDriverListQuery } from "@/redux/api/driverApi";

type DriverFieldProps = {
  name: string;
  label: string;
};

const DriverField = ({ name, label }: DriverFieldProps) => {
  const { data, isLoading } = useDriverListQuery({
    limit: 100,
    page: 1,
  });
  const drivers = data?.drivers;
  const driverOptions = drivers?.map((driver: any) => {
    return {
      label: driver?.user.name,
      value: driver?.id,
    };
  });

  return (
    <FormSelectField
      name={name}
      label={label}
      options={driverOptions as SelectOptions[]}
    />
  );
};

export default DriverField;
