import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ReduxDecorator } from 'shared/config/storybook/ReduxDecorator/ReduxDecorator';

// eslint-disable-next-line import/order
import ProfilePage from './ProfilePage';
import 'app/styles/index.scss';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [ReduxDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 22,
            country: Country.Armenia,
            lastname: 'ulbi tv',
            first: 'abs',
            city: 'abs',
            currency: Currency.EUR,
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), ReduxDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 22,
            country: Country.Armenia,
            lastname: 'ulbi tv',
            first: 'abs',
            city: 'abs',
            currency: Currency.EUR,
        },
    },
})];
