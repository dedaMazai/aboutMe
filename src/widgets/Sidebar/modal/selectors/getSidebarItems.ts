import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router';
import MainIcon from '@/shared/assets/icons/VectorHome.svg';
import AboutIcon from '@/shared/assets/icons/VectorAbout.svg';
import VectorPers from '@/shared/assets/icons/VectorPers.svg';
import VectorList from '@/shared/assets/icons/VectorList.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const SidebarItemList: SidebarItemType[] = [
            {
                path: getRouteMain(),
                Icon: MainIcon,
                text: 'main',
            },
            {
                path: getRouteAbout(),
                Icon: AboutIcon,
                text: 'aboutSite',
            },
        ];

        if (userData) {
            SidebarItemList.push(
                {
                    path: getRouteProfile(userData.id),
                    Icon: VectorPers,
                    text: 'profile',
                    authOnly: true,
                },
                {
                    path: getRouteArticles(),
                    Icon: VectorList,
                    text: 'article',
                    authOnly: true,
                },
            );
        }
        return SidebarItemList;
    },
);
