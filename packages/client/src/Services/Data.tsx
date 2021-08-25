import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  IProject, IPhoto, IMessage,
} from '../Types';

export const dataApi = createApi({
  reducerPath: 'dataApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/' }),
  endpoints: (builder) => ({
    getProjects: builder.query<IProject[], undefined>({
      query: () => 'projects',
    }),
    getPhotos: builder.query<IPhoto[], undefined>({
      query: () => 'photos',
    }),
    sendContactForm: builder.mutation<IMessage, Partial<IMessage>>({
      query(body) {
        return {
          url: 'contact',
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useGetPhotosQuery,
  useSendContactFormMutation,
} = dataApi;
