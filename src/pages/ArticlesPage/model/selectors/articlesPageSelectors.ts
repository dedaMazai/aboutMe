import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleView, ArticleSortField, ArticleType } from '@/entities/Article';

export const getArticlesPageLoading = (state: StateSchema) => state.articlePage?.isLoading || false;
export const getArticlesPageError = (state: StateSchema) => state.articlePage?.error;
export const getArticlesPageView = (state: StateSchema) => state.articlePage?.view || ArticleView.SMALL;
export const getArticlesPageNum = (state: StateSchema) => state.articlePage?.page || 1;
export const getArticlesPageLimit = (state: StateSchema) => state.articlePage?.limit || 8;
export const getArticlesPageMore = (state: StateSchema) => state.articlePage?.hasMore;
export const getArticlesPageInit = (state: StateSchema) => state.articlePage?._init;
export const getArticlesPageOrder = (state: StateSchema) => state.articlePage?.order ?? 'asc';
export const getArticlesPageSort = (state: StateSchema) => state.articlePage?.sort ?? ArticleSortField.CREATED;
export const getArticlesPageSearch = (state: StateSchema) => state.articlePage?.search ?? '';
export const getArticlesPageType = (state: StateSchema) => state.articlePage?.type ?? ArticleType.ALL;
