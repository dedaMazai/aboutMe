import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export const ReduxDecorator = (initialState?: DeepPartial<StateSchema>) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    (StoryComponent: Story) => (
        <StoreProvider initialState={initialState}>
            <StoryComponent />
        </StoreProvider>
    );
