import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/VectorHome.svg';
import AboutIcon from 'shared/assets/icons/VectorAbout.svg';
import VectorPers from 'shared/assets/icons/VectorPers.svg';
import VectorList from 'shared/assets/icons/VectorList.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
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
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        Icon: VectorList,
        text: 'article',
        authOnly: true,
    },
];
