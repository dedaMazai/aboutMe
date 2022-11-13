import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export const getArticlesPageLoading = (state: StateSchema) => state.articlePage?.isLoading || false;
export const getArticlesPageError = (state: StateSchema) => state.articlePage?.error;
export const getArticlesPageView = (state: StateSchema) => state.articlePage?.view || ArticleView.SMALL;
export const getArticlesPageNum = (state: StateSchema) => state.articlePage?.page || 1;
export const getArticlesPageLimit = (state: StateSchema) => state.articlePage?.limit || 8;
export const getArticlesPageMore = (state: StateSchema) => state.articlePage?.hasMore;
