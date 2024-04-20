import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import configuration from '../configurations';


export const autocompleteApi = createApi({
    reducerPath: "autocompleteApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${configuration.apiUrl}`,
        prepareHeaders(headers) {
            headers.set("Accept", "application/json");
        },
    }),
    endpoints: (builder) => ({
        getAutocomplete: builder.query({
            query: () => "/autocomplete",
        }),
    }),
});

export const { useGetAutocompleteQuery } = autocompleteApi;
