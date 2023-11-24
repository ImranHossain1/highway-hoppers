import { IMeta, ISchedule } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const BUS_SCHEDULE_API = "/bus-schedule";
export const scheduleApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addSchedule: build.mutation({
      query: (data) => ({
        url: BUS_SCHEDULE_API,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.schedule],
    }),

    schedules: build.query({
      query: (arg: Record<string, any>) => ({
        url: BUS_SCHEDULE_API,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any, meta: IMeta) => {
        return {
          schedules: response.data,
          meta,
        };
      },
      providesTags: [tagTypes.schedule],
    }),

    singleSchedule: build.query({
      query: (id) => ({
        url: `${BUS_SCHEDULE_API}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.schedule],
    }),
    availableSits: build.query({
      query: (id) => ({
        url: `${BUS_SCHEDULE_API}/${id}/availableSits`,
        method: "GET",
      }),
      providesTags: [tagTypes.schedule],
    }),

    updateSchedule: build.mutation({
      query: (data: any) => ({
        url: `${BUS_SCHEDULE_API}/${data.id}/update-schedule`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.schedule],
    }),

    deleteSchedule: build.mutation({
      query: (id: string) => ({
        url: `${BUS_SCHEDULE_API}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.schedule],
    }),
  }),
});

export const {
  useAddScheduleMutation,
  useDeleteScheduleMutation,
  useSchedulesQuery,
  useSingleScheduleQuery,
  useUpdateScheduleMutation,
  useAvailableSitsQuery,
} = scheduleApi;
