import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReduxDecorator } from '@/shared/config/storybook/ReduxDecorator/ReduxDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/avatar.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 22,
        country: Country.Armenia,
        lastname: 'ulbi tv',
        first: 'abs',
        city: 'abs',
        currency: Currency.EUR,
        avatar,
    },
};

Primary.decorators = [ReduxDecorator({
    loginForm: { username: 'admin', password: '123' },
})];

export const withError = Template.bind({});
withError.args = {
    error: 'true',
};

export const withLoading = Template.bind({});
withLoading.args = {
    isLoading: true,
};
