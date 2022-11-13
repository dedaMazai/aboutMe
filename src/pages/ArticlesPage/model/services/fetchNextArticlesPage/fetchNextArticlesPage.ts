import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageMore,
    getArticlesPageNum,
    getArticlesPageLoading,
} from '../../selectors/articlesPageSelectors';
import { ArticlePageActions } from '../../slices/ArticlePageSlice';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'articlePage/fetchNextArticlesPage',
    async (_, thunkApi) => {
        const {
            getState,
            dispatch,
        } = thunkApi;
        const hasMore = getArticlesPageMore(getState());
        const page = getArticlesPageNum(getState());
        const isLoading = getArticlesPageLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(ArticlePageActions.setPage(page + 1));
            dispatch(fetchArticleList({
                page: page + 1,
            }));
        }
    },
);
