import { apiSlice } from "../api/apiSlice";
import { userLoggedIn, userRegistration } from "./authSlice";

type RegistrasiResponse = {
  message: string;
  activationCode: string;
};

type RegistrasiData = {};

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //endpoints registes
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
          const result  = error;
        }
      },
    }),
    //endpoints activation
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
    //endpoints login
    login: builder.mutation({
      query:({email,password}) => ({
        url:"login",
        method:"POST",
        body:{
          email,
          password
        },
        credentials: "include" as const, //harus menyediakan cookies atau token otentikasi
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userLoggedIn({
              accessToken: result.data.accessToken,
              user: result.data.user
            })
          );
        } catch (error: any) {
          const result  = error;
        }
      },

    })
  }),
});

export const { useRegisterMutation, useActivationMutation, useLoginMutation } = authApi;
