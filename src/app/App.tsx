import { Link, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import {AboutPage} from "pages/AboutPage/";
import {MainPage} from "pages/MainPage/";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { className } from "shared/lib/classNames/classNames";

import './styles/index.scss'

export const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={className('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/'} element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}