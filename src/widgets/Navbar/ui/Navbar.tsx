import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);
    const onToggleModal = useCallback(() => {
        setIsAuthModal((prevState) => !prevState);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                type="button"
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('login')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {t('modalText')}
            </Modal>
        </div>
    );
};
