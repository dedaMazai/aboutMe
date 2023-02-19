import { useTranslation } from 'react-i18next';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Input } from '@/shared/ui/input';
import { Loader } from '@/shared/ui/Loader';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text';
import { Country, CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/Stack';
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
            <HStack
                justify="center"
                max
                className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}
            >
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack
                justify="center"
                max
                className={classNames(cls.ProfileCard, {}, [className, cls.error])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t('error.loadProfile')}
                    text={t('error.refreshPage')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readOnly,
    };

    return (
        <VStack gap="8" max className={classNames(cls.ProfileCard, mods, [className])}>
            {data?.avatar && (
                <HStack
                    justify="center"
                    max
                    className={cls.avatarWrapper}
                >
                    <Avatar alt="avatar" src={data?.avatar} />
                </HStack>
            )}
            <Input
                value={data?.first}
                placeholder={t('Your name')}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readOnly}
                data-testid="ProfileCard.firstName"
            />
            <Input
                value={data?.lastname}
                placeholder={t('Your surname')}
                className={cls.input}
                onChange={onChangeLastname}
                readonly={readOnly}
                data-testid="ProfileCard.lastName"
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
                onChange={onChangeCity}
                readonly={readOnly}
            />
            <Input
                value={data?.username}
                placeholder={t('Yor username')}
                className={cls.input}
                onChange={onChangeUsername}
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
        </VStack>
    );
};
