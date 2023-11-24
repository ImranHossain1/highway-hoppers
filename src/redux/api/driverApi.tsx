import { IMeta, ISchedule } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const DRIVER_API = "/driver";
export const driverApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDriver: build.mutation({
      query: (data) => ({
        url: DRIVER_API,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.driver],
    }),
    driverList: build.query({
      query: (arg: Record<string, any>) => ({
        url: DRIVER_API,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any, meta: IMeta) => {
        return {
          drivers: response.data.data,
          meta,
        };
      },
      providesTags: [tagTypes.driver],
    }),
  }),
});

export const { useDriverListQuery, useCreateDriverMutation } = driverApi;
