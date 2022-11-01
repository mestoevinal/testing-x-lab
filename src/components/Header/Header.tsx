import React from 'react'
import HeaderCss from './Header.module.scss'
import {useNavigate} from "react-router-dom"
import SettingsIcon from "./img/settingsIcon.svg"
import UserIcon from './img/userIcon.svg'

const Header = () => {
    let router = useNavigate()
    return (
        <div className={HeaderCss.headerContainer}>
            <div className={HeaderCss.headerContentContainer}>
                <div onClick={() => router('/')}>
                    <img src={SettingsIcon} alt="X-lab"/>
                    <span>Wrench CRM</span>
                </div>
                <div onClick={() => router('/')}>
                    <img src={UserIcon} alt="User Icon"/>
                    <span>Имя Фамилия</span>
                </div>
            </div>
        </div>
    )
}

export default Header;