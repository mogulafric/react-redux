import { apiSlice } from "../../app/api/apiSlice"
import { useState } from "react"

export const [userID, setUserID] = useState('') 
export const usersApiSlice = apiSlice.injectEndpoints({

    endpoints: builder => ({
        getUsers: builder.query({
            query: () => '/api/v1/user/getusers',
            keepUnusedDataFor: 60,
        }),
        getUser: builder.query({
            query: () => `/api/v1/user/getuserbyid/${userID}`,
            keepUnusedDataFor: 60,
        }),
        updateUser: builder.query({
            query: () => `/api/v1/user/updateuser`,
            keepUnusedDataFor: 60,
        }),
        deleteUser: builder.query({
            query: () => `/api/v1/user/deleteuser/${userID}`,
            keepUnusedDataFor: 60,
        })
    })
})

export const {
    useGetUsersQuery, useGetUserQuery, useUpdateUserQuery
} = usersApiSlice 