import React, {useState} from 'react'
import {NavLink} from "react-router-dom"
import table from './img/table.svg'
import exit from './img/exit.svg'
import main from './img/main.svg'
import search from './img/search.svg'
import map from './img/map.svg'
import widgets from './img/widgets.svg'
import calendar from './img/calendar.svg'
import settingsIcon from './img/settings.svg'
import NavbarCss from "./Navbar.module.scss"
import profile from "./img/profile.svg"
import finance from "./img/finance.svg"
import collapse from './img/collapse.svg'
import expand from './img/expand.svg'

const Navbar = () => {
    const [settings, setSettings] = useState(false)
    return (
        <div className={NavbarCss.wrapper}>
            <strong>
                Меню
            </strong>
            <div>
                <img src={main} alt="Главная"/>
                <NavLink to={"/"}>
                    Главная
                </NavLink>
            </div>

            <div>
                <img src={search} alt="Поиск адресов"/>
                <NavLink to={"/address"}>
                    Поиск адресов
                </NavLink>
            </div>
            <div>
                <img src={table} alt="Таблица"/>
                <NavLink to={"/"}>
                    Таблицы
                </NavLink>
            </div>
            <div>
                <img src={calendar} alt="Календарь"/>
                <NavLink to={"/"}>
                    Календарь
                </NavLink>
            </div>
            <div>
                <img src={map} alt="Карты"/>
                <NavLink to={"/"}>
                    Карты
                </NavLink>
            </div>
            <div>
                <img src={widgets} alt="Виджеты"/>
                <NavLink to={"/"}>
                    Виджеты
                </NavLink>
            </div>
            {/*Блок с настройками реализовывал и с вложенным вариантом, */}
            {/*без имитации вложенности, но так получалось больше кода,*/}
            {/*соответственно читаемость хуже. В итоге не определился что лучше, */}
            {/*но решил остановиться на варианте с лучшей читаемостью,*/}
            {/*но с небольшим костылем в виде константных отступов*/}
            <div
                className={NavbarCss.dynamicMenuItem}
                onClick={() => setSettings(!settings)}
            >
                    <div>
                        <img src={settingsIcon} alt="Настройки"/>
                        <NavLink to={"/"} className={NavbarCss.test}>
                            Настройки
                        </NavLink>
                    </div>
                {settings ?
                    <img src={expand} width={15} height={15} alt="развернуть настройки"/>
                    :
                    <img src={collapse} width={15} height={15} alt="свернуть настройки"/>
                }
            </div>
            {settings &&
                <div className={NavbarCss.settingsOpen}>
                    <img src={profile} alt="Настройки профиля"/>
                    <NavLink to="/">Настройки профиля</NavLink><br/>
                </div>
            }
            {settings &&
                <div className={NavbarCss.settingsOpen}>
                    <img src={finance} alt="Управление финансами"/>
                    <NavLink to="/">Управление финансами</NavLink>
                </div>
            }

            <div>
                <img src={exit} alt="Выход"/>
                <NavLink to={"/"}>
                    Выход
                </NavLink>
            </div>
        </div>

    );
};

export default Navbar;