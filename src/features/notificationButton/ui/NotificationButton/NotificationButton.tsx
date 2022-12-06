import { NotificationList } from 'entities/Notification';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { Popover } from 'shared/ui/Popups';
import Notification from 'shared/assets/icons/Notification.svg';

import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = (props: NotificationButtonProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <Popover
            className={classNames(cls.NotificationButton, {}, [className])}
            direction="bottom left"
            trigger={(
                <Button theme={ThemeButton.CLEAR}>
                    <Icon Svg={Notification} inverted />
                </Button>
            )}
        >
            <NotificationList className={cls.notification} />
        </Popover>
    );
};
