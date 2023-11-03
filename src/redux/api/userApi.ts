import { IMeta, ISchedule } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const USER_PROFILE_API = "/user";
export const scheduleApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userProfile: build.query({
      query: (id) => ({
        url: `${USER_PROFILE_API}/my-profile`,
        method: "GET",
      }),
      providesTags: [tagTypes.profile],
    }),
  }),
});

export const { useUserProfileQuery } = scheduleApi;
