import { Article } from '@/entities/Article';
import { rtqApi } from '@/shared/api/rtqApi';

const recommendationsApi = rtqApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendations: build.query<Article[], number>({ // для запроса используем query, а для изменения mutation
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
        // createArticleRecommendations: build.mutation({
        //     query: (limit) => ({
        //         url: '/articles',
        //         params: {
        //             _limit: limit,
        //         },
        //         method: 'PUT',
        //     }),
        // }),
    }),
});

export const useArticleRecommendations = recommendationsApi.useGetArticleRecommendationsQuery;
