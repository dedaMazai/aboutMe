import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleEditPageProps {
    className?: string
}

const ArticleEditPage = (props: ArticleEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams();
    const isEdit = Boolean(id);

    return (
        <div className={classNames('', {}, [className])}>
            {isEdit
                ? t('Edit article ') + id
                : t('Create new article')}
        </div>
    );
};

export default ArticleEditPage;
