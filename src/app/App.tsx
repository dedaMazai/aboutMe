import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { PageLoader } from 'shared/ui/PageLoader';

import './styles/index.scss';

export const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
