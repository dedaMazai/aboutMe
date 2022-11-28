import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Listbox } from './ListBox';

import 'app/styles/index.scss';

export default {
    title: 'shared/Listbox',
    component: Listbox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
} as ComponentMeta<typeof Listbox>;

const Template: ComponentStory<typeof Listbox> = (args) => <Listbox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    value: '123',
    items: [
        { content: 'fewwef', value: '123' },
        { content: 'dfs', value: '1dsf23' },
    ],
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    value: '123',
    direction: 'top left',
    items: [
        { content: 'fewwef', value: '123' },
        { content: 'dsf', value: 'sdf' },
    ],
};

export const TopRight = Template.bind({});
TopRight.args = {
    value: '123',
    direction: 'top right',
    items: [
        { content: 'fewwef', value: '123' },
        { content: 'dsf', value: 'sdf' },
    ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    value: '123',
    direction: 'bottom left',
    items: [
        { content: 'fewwef', value: '123' },
        { content: 'gsd', value: 'gs' },
    ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    value: '123',
    direction: 'bottom right',
    items: [
        { content: 'fewwef', value: '123' },
        { content: 'sgd', value: 'sdg' },
    ],
};
