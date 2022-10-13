import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUserName } from '../../modal/services/loginByUserName/loginByUserName';
import { getLoginState } from '../../modal/selectors/getLoginState/getLoginState';
import { loginActions } from '../../modal/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username,
        password,
        error,
        isLoading,
    } = useSelector(getLoginState);

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);
    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text text={t('formAuthorization')} />
            {error && <Text text={t('userAuthorizationInvalid')} theme={TextTheme.ERROR} />}
            <Input
                autofocus
                type="text"
                className={cls.input}
                placeholder={t('loginUserName')}
                onChange={onChangeUserName}
                value={username}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('loginPassword')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                theme={ThemeButton.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('login')}
            </Button>
        </div>
    );
});
