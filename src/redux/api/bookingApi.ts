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
  }),
});

export const {
  useAddBookingMutation,
  useGetUserPendingBookingsQuery,
  useGetUserConfirmedBookingsQuery,
  useGetUserCompletedBookingsQuery
} = bookingApi;
