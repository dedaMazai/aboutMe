import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import MainIcon from 'shared/assets/icons/VectorHome.svg';
import AboutIcon from 'shared/assets/icons/VectorOnList.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                type="button"
                className={cls.collapseBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                size={SizeButton.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <AppLink
                    to={RoutePath.main}
                    className={cls.item}
                    theme={AppLinkTheme.SECONDARY}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('main')}
                    </span>
                </AppLink>
                <AppLink
                    to={RoutePath.about}
                    className={cls.item}
                    theme={AppLinkTheme.SECONDARY}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('aboutSite')}
                    </span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
};
