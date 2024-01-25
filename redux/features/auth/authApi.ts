import { apiSlice } from "../api/apiSlice";
import { userRegistration } from "./authSlice";

type RegistrasiResponse = {
  message: string;
  activationCode: string;
};

type RegistrasiData = {};

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //endpoints here
    register: builder.mutation<RegistrasiResponse, RegistrasiData>({
      query: (data) => ({
        url: "register",
        method: "POST",
        body: data,
        credentials: "include" as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userRegistration({
              token: result.data.activationCode,
            })
          );
        } catch (error: any) {
          console.log(error);
        }
      },
    }),
    //endpoints here
    activation: builder.mutation({
      query: ({ activation_token, activation_code }) => ({
        url: "activate-user",
        method: "POST",
        body: {
          activation_token,
          activation_code,
        },
      }),
    }),
  }),
});

export const { useRegisterMutation, useActivationMutation } = authApi;
