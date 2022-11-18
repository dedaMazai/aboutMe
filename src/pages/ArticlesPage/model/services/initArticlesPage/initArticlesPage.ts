import { ArticleType, ArticleSortField } from 'entities/Article';
import { SortOrder } from 'shared/types/index';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageInit,
} from '../../selectors/articlesPageSelectors';
import { ArticlePageActions } from '../../slices/ArticlePageSlice';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>(
    'articlePage/initArticlesPage',
    async (searchParams, thunkApi) => {
        const {
            getState,
            dispatch,
        } = thunkApi;

        const init = getArticlesPageInit(getState());

        if (!init) {
            const orderFromUrl = searchParams.get('order') as SortOrder;
            const sortFromUrl = searchParams.get('sort') as ArticleSortField;
            const searchFromUrl = searchParams.get('search');
            const typeFromUrl = searchParams.get('type') as ArticleType;

            if (orderFromUrl) {
                dispatch(ArticlePageActions.setOrder(orderFromUrl));
            }
            if (sortFromUrl) {
                dispatch(ArticlePageActions.setSort(sortFromUrl));
            }
            if (searchFromUrl) {
                dispatch(ArticlePageActions.setSearch(searchFromUrl));
            }
            if (typeFromUrl) {
                dispatch(ArticlePageActions.setType(typeFromUrl));
            }

            dispatch(ArticlePageActions.initState());
            dispatch(fetchArticleList({}));
        }
    },
);
