import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/VectorHome.svg';
import AboutIcon from 'shared/assets/icons/VectorOnList.svg';
import VectorPers from 'shared/assets/icons/VectorPers.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'main',
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'aboutSite',
    },
    {
        path: RoutePath.profile,
        Icon: VectorPers,
        text: 'profile',
    },
];
