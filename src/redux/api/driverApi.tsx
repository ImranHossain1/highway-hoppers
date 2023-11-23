import { IMeta, ISchedule } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const DRIVER_API = "/driver";
export const driverApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    driverList: build.query({
      query: (arg: Record<string, any>) => ({
        url: DRIVER_API,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any, meta: IMeta) => {
        return {
          drivers: response.data,
          meta,
        };
      },
      providesTags: [tagTypes.schedule],
    }),
  }),
});

export const { useDriverListQuery } = driverApi;
