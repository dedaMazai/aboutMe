import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
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
                path: RoutePath.main,
                Icon: MainIcon,
                text: 'main',
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: 'aboutSite',
            },
        ];

        if (userData) {
            SidebarItemList.push(
                {
                    path: RoutePath.profile + userData.id,
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
            );
        }
        return SidebarItemList;
    },
);
