import {
    AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { AxiosInstance } from 'axios';
import { UserSchema } from '@/entities/User';
import { CounterSchema } from '@/entities/Counter';
import { LoginSchema } from '@/features/AuthByUserName';
import { ArticleDetailsSchema } from '@/entities/Article';
import {
    ArticleDetailsPageSchema,
} from '@/pages/ArticleDetailsPage';
import { AddCommentFormSchema } from '@/features/addCommentForm';
import { ArticlePageSchema } from '@/pages/ArticlesPage';
import { ScrollUiSchema } from '@/features/ScrollUi';
import { rtqApi } from '@/shared/api/rtqApi';
import { ProfileSchema } from '@/features/editableProfileCard';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    scrollUi: ScrollUiSchema;
    [rtqApi.reducerPath]: ReturnType<typeof rtqApi.reducer>,

    // Асинхронные редьюсеры
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    addCommentForm?: AddCommentFormSchema;
    articlePage?: ArticlePageSchema;
    articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    // true - вмонтирован, false - демонтирован
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
