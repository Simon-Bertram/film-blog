import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: '',
  prepareHeaders: (headers, { getState }) => {
    const { userInfo } = getState().auth
    if (userInfo) {
      headers.set('Authorization', `Bearer ${userInfo.token}`)
    }
    return headers
  }
})

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({}),
})
