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
    busList: build.query({
      query: (arg: Record<string, any>) => ({
        url: BUS_API,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any, meta: IMeta) => {
        return {
          buses: response.data,
          meta,
        };
      },
      providesTags: [tagTypes.bus],
    }),
    createBus: build.mutation({
      query: (data) => ({
        url: BUS_API,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.bus],
    }),

    updateBus: build.mutation({
      query: (data: any) => ({
        url: `${BUS_API}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.bus],
    }),
  }),
});

export const {
  useGetSingleBusQuery,
  useUpdateBusMutation,
  useBusListQuery,
  useCreateBusMutation,
} = busApi;
