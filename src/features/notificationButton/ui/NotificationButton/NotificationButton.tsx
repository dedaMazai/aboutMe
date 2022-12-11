import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { NotificationList } from '@/entities/Notification';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Popover } from '@/shared/ui/Popups';
import Notification from '@/shared/assets/icons/Notification.svg';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = (props: NotificationButtonProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const onShowDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const trigger = (
        <Button className={cls.center} onClick={onShowDrawer} theme={ThemeButton.CLEAR}>
            <Icon Svg={Notification} inverted />
        </Button>
    );

    return (
        <>
            <BrowserView>
                <Popover
                    className={classNames(cls.NotificationButton, {}, [className])}
                    direction="bottom left"
                    trigger={trigger}
                >
                    <NotificationList className={cls.notification} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList className={cls.notification} />
                </Drawer>
            </MobileView>
        </>
    );
};
