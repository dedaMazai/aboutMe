import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Drawer } from './Drawer';
import '@/app/styles/index.scss';

export default {
    title: 'shared/Drawer',
    component: Drawer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <p>1234</p>,
    isOpen: true,
};
