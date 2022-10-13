import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autofocus
                type="text"
                className={cls.input}
                placeholder={t('loginUserName')}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('loginPassword')}
            />
            <Button
                className={cls.loginBtn}
            >
                {t('login')}
            </Button>
        </div>
    );
};
