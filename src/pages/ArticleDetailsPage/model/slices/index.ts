import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { ArticleDetailsCommentsReducer } from './ArticleDetailsCommentSlice';
import { ArticleDetailsRecommendationsReducer } from './ArticleDetailsRecommendationsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommendations: ArticleDetailsRecommendationsReducer,
    comments: ArticleDetailsCommentsReducer,
});
