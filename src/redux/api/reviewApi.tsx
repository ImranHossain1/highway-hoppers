import { IMeta, ISchedule } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const REVIEW_API = "/review";
export const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    postReview: build.mutation({
      query: (data) => ({
        url: `${REVIEW_API}/${data.id}`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.booking],
    }),
    updateReview: build.mutation({
      query: (data: any) => ({
        url: `${REVIEW_API}/${data.id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.booking, tagTypes.review],
    }),
    deleteReview: build.mutation({
      query: (id) => ({
        url: `${REVIEW_API}/${id}`,
        method: "Delete",
      }),
      invalidatesTags: [tagTypes.booking],
    }),
    getAllReviews: build.query({
      query: (arg: Record<string, any>) => ({
        url: REVIEW_API,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any, meta: IMeta) => {
        return {
          reviews: response.data,
          meta,
        };
      },
      providesTags: [tagTypes.review],
    }),
    getAllDriversReviews: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${REVIEW_API}/driverReview`,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any, meta: IMeta) => {
        return {
          reviews: response.data,
          meta,
        };
      },
      providesTags: [tagTypes.review],
    }),
  }),
});

export const {
  usePostReviewMutation,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
  useGetAllReviewsQuery,
  useGetAllDriversReviewsQuery,
} = reviewApi;
