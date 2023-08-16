import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postingorders = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://orderapi-si22.onrender.com/' }),
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


