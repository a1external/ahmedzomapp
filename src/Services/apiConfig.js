// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// export const resturantquicksearch = createApi({
//   reducerPath: 'postApi',
//   // http://3.17.216.66:4000/
//   baseQuery: fetchBaseQuery({ baseUrl: 'http://3.17.216.66:4000/' }),
//   endpoints: (builder) => ({
//     getAllData: builder.query({
//       query: () => ({
//         url: "quicksearch",
//         method: "GET"
//       })
//     }),
//     getAllMealData: builder.query({
//       query: (id) => ({
//         url: `restaurant?mealtype_id=${id}`,
//         method: "GET"
//       })
//     }),

//     getAllLocationData: builder.query({
//       query: () => ({
//         url: "location",
//         method: "GET"
//       })
//     }),

//     getAllCityData: builder.query({
//       query: (id) => ({
//         url: `restaurant?stateId=${id}`,
//         method: "GET"
//       })
//     }),

//     getDataById: builder.query({
//       query: (id) => ({
//         url: `posts/${id}`,
//         method: "GET"
//       })
//     }),

//     getDataByLimit: builder.query({
//       query: (num) => ({
//         url: `posts?_limit=${num}`,
//         method: "GET"
//       })
//     }),

//   })
// })

// export const {useGetAllMealDataQuery, useGetAllCityDataQuery, useGetAllLocationDataQuery, useGetAllDataQuery, useGetDataByIdQuery, useGetDataByLimitQuery } = postApi


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE_URL = 'http://3.17.216.66:4000/';

const getBaseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
});

const getQueryWithParams = (url, params) => ({
  url,
  method: 'GET',
  params,
});

export const resturantquicksearch = createApi({
  reducerPath: 'postApi',
  baseQuery: getBaseQuery,
  endpoints: (builder) => ({
    getAllData: builder.query({
      query: () => getQueryWithParams('quicksearch'),
    }),
    getAllMealData: builder.query({
      query: (id) => getQueryWithParams(`restaurant`, { mealtype_id: id }),
    }),
    getAllLocationData: builder.query({
      query: () => getQueryWithParams('location'),
    }),
    getAllCityData: builder.query({
      query: (id) => getQueryWithParams(`restaurant`, { stateId: id }),
    }),
    getDataById: builder.query({
      query: (id) => getQueryWithParams(`posts/${id}`),
    }),
    getDataByLimit: builder.query({
      query: (num) => getQueryWithParams('posts', { _limit: num }),
    }),
    
    getAllDetailsDataById:builder.query({
      query: (id) => getQueryWithParams(`details/${id}`),
    }),
    
    
  getAllDetailsDatabyid: builder.query({
          query: (id) => ({
     url: `details/${id}`,
      method: "GET"
        })
    }),

    getAllDetailsmenuDatabyid: builder.query({
      query: (id) => ({
 url: `menu/${id}`,
  method: "GET"
    })
}),

    
  }),
});

export const {
  useGetAllDetailsmenuDatabyidQuery,
  useGetAllDetailsDatabyidQuery,
  useGetAllMealDataQuery,
  useGetAllCityDataQuery,
  useGetAllLocationDataQuery,
  useGetAllDataQuery,
  useGetDataByIdQuery,
  useGetDataByLimitQuery,
} = resturantquicksearch ;
