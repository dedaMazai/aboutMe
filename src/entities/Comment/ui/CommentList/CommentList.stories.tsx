import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReduxDecorator } from 'shared/config/storybook/ReduxDecorator/ReduxDecorator';
import { CommentList } from './CommentList';

import 'app/styles/index.scss';

export default {
    title: 'features/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: '1234',
            user: { id: '1', username: 'Vasya' },
        },
        {
            id: '2',
            text: '12313234',
            user: { id: '1', username: 'V333asya' },
        },
    ],
};

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};
