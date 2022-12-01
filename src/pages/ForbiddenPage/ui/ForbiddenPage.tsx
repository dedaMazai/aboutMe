import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

export const ForbiddenPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('You have not available this page')}
        </Page>
    );
};
