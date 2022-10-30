import React from 'react';
import NewsCss from './News.module.scss'
import {NavLink} from "react-router-dom";
import {text} from "./text";

const News = () => {
    const res: any = []
    const linkRegular = /((?:https?:\/\/|ftps?:\/\/|\bwww\.)(?:(?![.,?!;:()]*(?:\s|$))[^\s]){2,})|(\n+|(?:(?!(?:https?:\/\/|ftp:\/\/|\bwww\.)(?:(?![.,?!;:()]*(?:\s|$))[^\s]){2,}).)+)/gim
    const emailRegular = /[^|\w](\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)/gim

    text.replace(linkRegular,
        (m, linkValid, textparam):any => {
            let emailPush = ""
            textparam?.replace(emailRegular, (item: string, emailValid: string) => {
                emailPush = emailValid
                res.push(<a href={`mailto:${emailValid}`} key={res.length}>{emailValid}</a>)
            })
            res.push(
                    linkValid
                    ? <a href={(linkValid[0] === "w" ? `//` : "") + linkValid} key={res.length}>{linkValid}</a>
                    : textparam.split(" ").filter((e:any) => e !== emailPush).join(" ")
            )
        })

    return (
        <div className={NewsCss.wrapper}>
            <div className={NewsCss.title}>Новости</div>
            <div className={NewsCss.description}>
                Обновление CRM до 1.2
            </div>
            <div className={NewsCss.text}>
                <p>
                    {res}
                </p>
            </div>
        </div>
    );
};

export default News;