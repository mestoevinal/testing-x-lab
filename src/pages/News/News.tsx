import React, {JSXElementConstructor} from 'react';
import NewsCss from './News.module.scss'
import {NavLink} from "react-router-dom";
import {text} from "./text";

const News = () => {
    let modifiedTextArr:Array<any> = text.split(" ")
    let resultArr:Array<any> = []
    const linkRegular = /((?:https?:\/\/|ftps?:\/\/|\bwww\.)(?:(?![.,?!;:()]*(?:\s|$))[^\s]){2,})|(\n+|(?:(?!(?:https?:\/\/|ftp:\/\/|\bwww\.)(?:(?![.,?!;:()]*(?:\s|$))[^\s]){2,}).)+)/gim
    const emailRegular = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/gim

    for (let i = 0; i < modifiedTextArr.length; i++) {
        let word = modifiedTextArr[i]
        word.replace(linkRegular, (verifiableWord: string, link: string) => {
            if (link) {
                modifiedTextArr[i] = <a href={(link[0] === "w" ? `//` : "") + link}>{link}</a>
            }
        })
        word.replace(emailRegular, (email: string) => modifiedTextArr[i] = <a href={`mailto:${email}`} >{email}</a>)
    }

    let AddWord = ""
    for (let i = 0; i <= modifiedTextArr.length; i++) {
        if(typeof modifiedTextArr[i] === 'object'){
            resultArr.push(modifiedTextArr[i])
            if(AddWord !== "") {
                resultArr.push(AddWord)
                AddWord = ""
            }
        } else if (i === modifiedTextArr.length){
            resultArr.push(AddWord)
        }
        else {
            AddWord += ` ${modifiedTextArr[i]}`
        }
    }


    return (
        <div className={NewsCss.wrapper}>
            <div className={NewsCss.title}>Новости</div>
            <div className={NewsCss.description}>
                Обновление CRM до 1.2
            </div>
            <div className={NewsCss.text}>
                <p>
                    {resultArr}
                </p>
                <p>
                    {resultArr}
                </p>
                <p>
                    {resultArr}
                </p>
                <p>
                    {resultArr}
                </p>
                <p>
                    {resultArr}
                </p>
                <p>
                    {resultArr}
                </p>
            </div>
        </div>
    );
};

export default News;