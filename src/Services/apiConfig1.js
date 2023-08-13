import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postingorders = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9101/' }),
  endpoints: (builder) => ({
    updateData: builder.mutation({
        query:(data)=>{
            console.log("apiconfig1data",data)
            return{ 
            url:"orders",
            method:"POST",
            body:data,
        }
                   },
    })
  }),
});

export const { useUpdateDataMutation } = postingorders;


