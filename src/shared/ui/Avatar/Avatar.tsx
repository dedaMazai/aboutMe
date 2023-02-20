import { CSSProperties, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage';
import { Skeleton } from '../Skeleton';
import { Icon } from '../Icon';
import UserIcon from '../../assets/icons/user-filled.svg';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    fallbackInverted?: boolean;
}

export const Avatar = (props: AvatarProps) => {
    const {
        className,
        src,
        size,
        alt,
        fallbackInverted,
    } = props;

    const mods: Mods = {};
    const style = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = <Icon inverted={fallbackInverted} width={size} height={size} Svg={UserIcon} />;

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            alt={alt}
            style={style}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};
