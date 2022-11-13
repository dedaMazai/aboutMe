import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { profileReducer } from 'entities/Profile/modal/slice/profileSlice';
import { addCommentFormReducer } from 'features/addCommentForm/modal/slices/addCommentFormSlice';
import { loginReducer } from 'features/AuthByUserName/modal/slice/loginSlice';
import { ArticleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slices/ArticleDetailsCommentSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsComments: ArticleDetailsCommentsReducer,
};

export const ReduxDecorator = (
    state?: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    (StoryComponent: Story) => (
        <StoreProvider
            initialState={state}
            asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
        >
            <StoryComponent />
        </StoreProvider>
    );
