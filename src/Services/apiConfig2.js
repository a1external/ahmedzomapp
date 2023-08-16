import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const loginRegisterApi = createApi({
    reducerPath: "loginRegisterApi",
    baseQuery: fetchBaseQuery({baseUrl:"https://loginapi-nad5.onrender.com/",
      prepareHeaders: (headers) => {
        const authToken = sessionStorage.getItem('ltk');
        if (authToken) {
          headers.set('Authorization', `Bearer ${authToken}`);
          console.log("i am auth token",authToken);
        }
        return headers;
      },
      responseHandler: async (response) => {
        try {
          const data = await response.json();
          if (!response.ok) {
            // Parse the error message into a JavaScript object
            const errorData = JSON.parse(data.message || "{}");
            // If the response status is not ok (e.g., 400, 401, 409, etc.), throw an error with the error message
            throw { message: errorData.message || "An error occurred.", status: response.status };
          }
          // If the response status is ok, return the data
          return data;
        } catch (error) {
          // Handle the case where response.json() fails to parse the data as JSON
          throw { message: "Failed to parse response data.", status: response.status };
        }
      },
    }),
      endpoints:(builder)=>({
        getLoginData:builder.mutation({
            query:(data)=>({
                url:"api/auth/login",
                method:"POST",
                body:data,
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
        }),
        getRegisterData:builder.mutation({
            query:(data)=>{
                console.log(data, " register data from API COnfig")
                return{
                    url:"api/auth/register",
                    method:"POST",
                    body:data,
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                }
            }
        }),
        getAllUserData: builder.query({
            query: () => {
              return{
                url: "api/auth/userinfo",
                method: "GET",  
                headers: {
                  'x-access-token':sessionStorage.getItem('ltk'),
                  'Content-Type':'application/json',
                  'accept':'application/json',
                },
              }
            },
        }),
    })
})

export const {useGetLoginDataMutation, useGetRegisterDataMutation, useGetAllUserDataQuery}= loginRegisterApi