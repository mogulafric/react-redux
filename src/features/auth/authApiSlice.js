import { apiSlice } from "../../app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/api/v1/auth/login',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        updateProfile: builder.mutation({
            query: credentials => ({
                url: '/api/v1/auth/signup',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        register: builder.mutation({
            query: credentials => ({
                url: '/api/v1/auth/signup',
                method: 'POST'
            })
        }),
    })
})


export const {
    useLoginMutation,
    useUpdateProfileMutation,
    useRegisterMutation
} = authApiSlice