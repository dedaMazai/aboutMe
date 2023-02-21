import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

export const ForbiddenPage = () => {
    const { t } = useTranslation();

    return (
        <Page data-testid="ForbiddenPage">
            {t('You have not available this page')}
        </Page>
    );
};
