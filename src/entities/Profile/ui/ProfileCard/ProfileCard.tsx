import { useTranslation } from 'react-i18next';
import { Currency } from 'entities/Currency/modal/types/currency';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/input/Input';
import { Loader } from 'shared/ui/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Country } from 'entities/Country/modal/types/country';
import { CurrencySelect } from 'entities/Currency';
import { CountrySelect } from 'entities/Country';
import { Profile } from '../../modal/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    isLoading?: boolean;
    error?: string;
    data?: Profile;
    readOnly?: boolean;
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const {
        className,
        isLoading,
        error,
        data,
        readOnly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('error.loadProfile')}
                    text={t('error.refreshPage')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readOnly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar alt="avatar" src={data?.avatar} />
                    </div>
                )}
                <Input
                    value={data?.first}
                    placeholder={t('Your name')}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readonly={readOnly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Your surname')}
                    className={cls.input}
                    onChange={onChangeLastname}
                    readonly={readOnly}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Your age')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly={readOnly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('City')}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readonly={readOnly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Yor username')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readOnly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Input url avatar')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readonly={readOnly}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readOnly}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readOnly}
                />
            </div>
        </div>
    );
};
