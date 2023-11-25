export const genderOptions = [
  {
    label: "Male",
    value: "MALE",
  },
  {
    label: "Female",
    value: "FEMALE",
  },
];
export const busScheduleStatus = [
  {
    label: "Upcoming",
    value: "Upcoming",
  },
  {
    label: "Ongoing",
    value: "Ongoing",
  },
  {
    label: "Arrived",
    value: "Arrived",
  },
];
export const busTypeOption = [
  {
    label: "AC",
    value: "AC",
  },
  {
    label: "NON AC",
    value: "Non_AC",
  },
];
export const pointsOption = [
  {
    label: "DHAKA",
    value: "DHAKA",
  },
  {
    label: "KHULNA",
    value: "KHULNA",
  },
  {
    label: "RAJSHAHI",
    value: "RAJSHAHI",
  },
  {
    label: "SYLHET",
    value: "SYLHET",
  },
  {
    label: "BARISHAL",
    value: "BARISHAL",
  },
  {
    label: "CHOTTOGRAM",
    value: "CHOTTOGRAM",
  },
  {
    label: "RONGPUR",
    value: "RONGPUR",
  },
];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const monthOptions = months.map((month: string) => {
  return {
    label: month,
    value: month,
  };
});

export const days = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];
export const WeekDays = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

export const daysOptions = days.map((day: string) => {
  return {
    label: day,
    value: day,
  };
});
