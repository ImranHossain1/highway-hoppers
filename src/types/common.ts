export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
  message?: string;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message?: string;
  errorMessages?: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export interface ISchedule {
  id: string;
  startTime: string;
  endTime: string;
  startDate: string;
  endDate: string;
  startingPoint: string;
  endPoint: string;
  dayOfWeek: string;
  bookedSit: number;
  PendingSit: number;
  busFare: number;
  status: string;
  busId: string;
  driverId: string;
  createdAt: string;
  updatedAt: string;
  bus: IBus;
  driver: IDriver;
}

export interface IBus {
  id: string;
  busType: string;
  busNumber: string;
  totalSit: number;
  createdAt: string;
  updatedAt: string;
}

export interface IDriver {
  id: string;
  createdAt: string;
  updatedAt: string;
  salary: number;
  rating: number;
  userId: string;
  totalReviewer: number;
  totalRatings: number;
}
