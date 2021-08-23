import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  IProject, IPhoto,
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
  }),
});

export const {
  useGetProjectsQuery,
  useGetPhotosQuery,
} = dataApi;
