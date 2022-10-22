import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { profileReducer } from 'entities/Profile/modal/slice/profileSlice';
import { loginReducer } from 'features/AuthByUserName/modal/slice/loginSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
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
