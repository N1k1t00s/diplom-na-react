import React from 'react';
// import classes from "./MyFooter.module.css";
import telegramIcon from "../../img/social-media/i_tg.svg";
import vkontakteIcon from "../../img/social-media/i_vk.svg";
import yandexDzenIcon from "../../img/social-media/i_ya.svg";
import { Divider } from 'antd';

const Footer = (props) => {
    const isStickyFooter = props.isStickyFooter; // Признак привязки футера к нижнему краю монитора
    const footerClassName = isStickyFooter ? 'footer sticky' : 'footer';

    return (
        <>
            <div className={footerClassName}>
                <Divider/>
                <div className="social-media" {...props}>
                    <a href="https://t.me/konkurskraineva" target="_blank">
                        <img src={telegramIcon} alt="Телеграм" />
                    </a>
                    <a href="https://vk.com/krainevcompetition" target="_blank">
                        <img src={vkontakteIcon} alt="ВКонтакте" />
                    </a>
                    <a href="https://dzen.ru/id/633318fa2588fb646d6694b9" target="_blank">
                        <img src={yandexDzenIcon} alt="Яндекс" />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Footer;