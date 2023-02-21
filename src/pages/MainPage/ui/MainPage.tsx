import { useTranslation } from 'react-i18next';
import { Counter } from '@/entities/Counter';
import { Page } from '@/widgets/Page';
import { RatingCard } from '@/entities/Rating';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page data-testid="MainPage">
            {t('mainPage')}
            <Counter />
            <RatingCard
                title="Как вам статья?"
                feedbackTitle="Оставьте отзыв"
                hasFeedback
            />
        </Page>
    );
};

export default MainPage;
