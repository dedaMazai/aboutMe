import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Text';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/AppLink';
import {
    Article,
    ArticleBlockType,
    ArticleTextBlock,
    ArticleView,
} from '../../model/types/article';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AppImage } from '@/shared/ui/AppImage';

import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = (props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
        target,
    } = props;
    const { t } = useTranslation('article');

    const Types = <Text text={article?.type.join(', ')} className={cls.types} />;
    const Views = (
        <>
            <Text text={String(article?.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article?.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article?.user.avatar} />
                        <Text text={article?.user.username} className={cls.username} />
                        <Text text={article?.createdAt} className={cls.data} />
                    </div>
                    <Text text={article?.title} className={cls.title} />
                    {Types}
                    <AppImage
                        fallback={<Skeleton width="100%" height={250} />}
                        src={article?.img}
                        className={cls.img}
                        alt={article?.title}
                    />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <AppLink
                            to={getRouteArticleDetails(article.id)}
                            target={target}
                        >
                            <Button theme={ThemeButton.OUTLINE}>
                                {t('Read further...')}
                            </Button>
                        </AppLink>
                    </div>
                    <div className={cls.infoWrapper}>
                        {Views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <AppImage
                        fallback={<Skeleton width={200} height={200} />}
                        src={article?.img}
                        className={cls.img}
                        alt={article?.title}
                    />
                    <Text text={article?.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {Types}
                    {Views}
                </div>
                <Text text={article?.title} className={cls.title} />
            </Card>
        </AppLink>
    );
};
