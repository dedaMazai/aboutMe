/* eslint-disable andreibread-plugin/layer-imports */
import { Story } from '@storybook/react';
import { ThemeProvider } from '@/app/providers/ThemeProvider';

import '@/app/styles/index.scss';
import { Theme } from '@/shared/const/theme';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
