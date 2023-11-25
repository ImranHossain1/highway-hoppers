import { IMeta, ISchedule } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const BOOKING_API = "/booking";
export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addBooking: build.mutation({
      query: (data) => ({
        url: `${BOOKING_API}/create-booking`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.booking],
    }),
    confirmBooking: build.mutation({
      query: () => ({
        url: `${BOOKING_API}/complete-booking`,
        method: "PATCH",
      }),
      invalidatesTags: [tagTypes.booking],
    }),
    cancelBooking: build.mutation({
      query: () => ({
        url: `${BOOKING_API}/cancel-all-pending-booking`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.booking],
    }),
    cancelSingleBooking: build.mutation({
      query: (id) => ({
        url: `${BOOKING_API}/${id}/cancel-single-pending-booking`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.booking],
    }),
    getUserPendingBookings: build.query({
      query: () => ({
        url: `${BOOKING_API}/get-user-Pending-Booking`,
        method: "GET",
      }),
      providesTags: [tagTypes.booking],
    }),
    getUserConfirmedBookings: build.query({
      query: () => ({
        url: `${BOOKING_API}/get-user-bookings`,
        method: "GET",
      }),
      providesTags: [tagTypes.booking],
    }),
    getUserCompletedBookings: build.query({
      query: () => ({
        url: `${BOOKING_API}/get-user-completed-bookings`,
        method: "GET",
      }),
      providesTags: [tagTypes.booking],
    }),
    getAllBookings: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${BOOKING_API}/get-all-bookings`,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any, meta: IMeta) => {
        return {
          bookings: response.data,
          meta,
        };
      },
      providesTags: [tagTypes.booking],
    }),
    getAllPendingBookings: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${BOOKING_API}/get-all-pending-bookings`,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any, meta: IMeta) => {
        return {
          bookings: response.data,
          meta,
        };
      },
      providesTags: [tagTypes.booking],
    }),
  }),
});

export const {
  useAddBookingMutation,
  useGetUserPendingBookingsQuery,
  useGetUserConfirmedBookingsQuery,
  useGetUserCompletedBookingsQuery,
  useGetAllBookingsQuery,
  useGetAllPendingBookingsQuery,
  useConfirmBookingMutation,
  useCancelBookingMutation,
  useCancelSingleBookingMutation,
} = bookingApi;
