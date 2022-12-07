import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

import '@/app/styles/index.scss';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Text',
    text: 'Text weffew wegweggew 213',
};

export const PrimaryError = Template.bind({});
PrimaryError.args = {
    title: 'Text',
    text: 'Text weffew wegweggew 213',
    theme: TextTheme.ERROR,
};

export const PrimaryNoText = Template.bind({});
PrimaryNoText.args = {
    title: 'Text',
};

export const PrimaryNoTitle = Template.bind({});
PrimaryNoTitle.args = {
    text: 'Text weffew wegweggew 213',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Text',
    text: 'Text weffew wegweggew 213',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryNoTextDark = Template.bind({});
PrimaryNoTextDark.args = {
    title: 'Text',
};
PrimaryNoTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryNoTitleDark = Template.bind({});
PrimaryNoTitleDark.args = {
    text: 'Text weffew wegweggew 213',
};
PrimaryNoTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Заголовок',
    text: 'Text main',
    size: TextSize.L,
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Заголовок',
    text: 'Text main',
    size: TextSize.M,
};

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Заголовок',
    text: 'Text main',
    size: TextSize.S,
};
