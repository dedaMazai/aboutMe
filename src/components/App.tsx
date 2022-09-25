import { Link, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import {AboutPageAsync} from "../pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "../pages/MainPage/MainPage.async";
import { useTheme } from "../theme/useTheme";
import { className } from "../helpers/classNames/classNames";

import '../styles/index.scss'

export const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={className('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}