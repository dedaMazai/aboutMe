import { Article, ArticleType } from 'entities/Article';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { addQueryParams } from 'shared/lib/hooks/url/addQueryParams/addQueryParams';
import {
    getArticlesPageType,
    getArticlesPageLimit,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageNum,
} from '../../selectors/articlesPageSelectors';

interface FetchArticleListProps {
    replace?: boolean;
}

export const fetchArticleList = createAsyncThunk<
    Article[],
    FetchArticleListProps,
    ThunkConfig<string>
>(
    'articlePage/fetchArticleList',
    async (props, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const limit = getArticlesPageLimit(getState());
        const sort = getArticlesPageSort(getState());
        const order = getArticlesPageOrder(getState());
        const search = getArticlesPageSearch(getState());
        const page = getArticlesPageNum(getState());
        const type = getArticlesPageType(getState());

        try {
            addQueryParams({
                sort, order, search, type,
            });
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    type: type === ArticleType.ALL ? undefined : type,
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('ERROR');
        }
    },
);
