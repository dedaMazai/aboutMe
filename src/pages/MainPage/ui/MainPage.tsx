import { useTranslation } from 'react-i18next';
import { Counter } from '@/entities/Counter';
import { Page } from '@/widgets/Page';
import { RatingCard } from '@/entities/Rating';
import { Grid } from '@/shared/ui/Grid/Grid';

import cls from './MainPage.module.scss';

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
            <div className={cls.block}>
                <Grid container gap="32" className={cls.const}>
                    <Grid xl="12" xs="2" xm="1" className={cls.elem}>123</Grid>
                    <Grid className={cls.elemMain}>
                        <div className={cls.check}>12</div>
                    </Grid>
                    <Grid className={cls.elem}>213</Grid>
                    <Grid className={cls.elem}>123</Grid>
                    <Grid className={cls.elem}>213</Grid>
                    <Grid className={cls.elem}>213</Grid>
                    <Grid className={cls.elem}>213</Grid>
                    <Grid className={cls.elem}>213</Grid>
                    <Grid className={cls.elem}>213</Grid>
                </Grid>
            </div>
        </Page>
    );
};

export default MainPage;
