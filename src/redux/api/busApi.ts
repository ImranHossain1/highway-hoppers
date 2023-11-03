import { IMeta, ISchedule } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const BUS_API = "/bus";
export const busApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSingleBus: build.query({
      query: (id) => ({
        url: `${BUS_API}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.bus],
    }),
  }),
});

export const { useGetSingleBusQuery } = busApi;
