import { useBusListQuery } from "@/redux/api/busApi";
import FormSelectField, { SelectOptions } from "./FormSelectField";
import { useDriverListQuery } from "@/redux/api/driverApi";

type BusFieldProps = {
  name: string;
  label: string;
};

const BusField = ({ name, label }: BusFieldProps) => {
  const { data, isLoading } = useBusListQuery({
    limit: 100,
    page: 1,
  });
  const buses = data?.buses;
  const busOptions = buses?.map((bus: any) => {
    return {
      label: bus?.busNumber,
      value: bus?.id,
    };
  });

  return (
    <FormSelectField
      name={name}
      label={label}
      options={busOptions as SelectOptions[]}
    />
  );
};

export default BusField;
