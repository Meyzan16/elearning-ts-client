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
      //respons dari server setelah permintaan berhasil dikirim
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
        credentials: "include" as const, //berfungsi untuk jika BE menyediakan cookies atau token otentikasi
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled; // hasil dari promise yang dikirimkan
          dispatch(
            userLoggedIn({
              accessToken: result.data.accessToken,
              user: result.data.user
            })
          );
        } catch (error: any) {
          return error;
        }
      },
    }),
    //endpoint login with social auth
    socialAuth: builder.mutation({
      query:({email,name,avatar}) => ({
        url:"social-auth",
        method:"POST",
        body:{
          email,
          name,
          avatar,
        },
        credentials: "include" as const, //berfungsi untuk jika BE menyediakan cookies atau token otentikasi
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
          console.log(error);
        }
      },
    }),
  }),
});

export const { useRegisterMutation, useActivationMutation, useLoginMutation, useSocialAuthMutation } = authApi;
