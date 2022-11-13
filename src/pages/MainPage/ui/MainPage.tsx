import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { Page } from 'shared/ui/Page/Page';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('mainPage')}
            <Counter />
        </Page>
    );
};

export default MainPage;
