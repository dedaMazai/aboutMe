import { Article } from 'entities/Article';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticleDetailsRecommendationSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
}
