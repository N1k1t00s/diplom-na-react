import React from 'react';
import {NavLink} from 'react-router-dom';
import {Breadcrumb} from 'antd';
import {getCurrentYear} from "../../utils/currentYear";

const App = () => {
        const breadcrumbItems = [
            {
                title: <NavLink exact to="/">Главная</NavLink>
            },
            {
                title: `Конкурс ${getCurrentYear()}`,
                menu: {
                    items: [
                        {
                            key: '1',
                            label: <NavLink exact to="/terms">Условия участия</NavLink>
                        },
                        {
                            key: '2',
                            label: <NavLink to="/repertoire">Программа</NavLink>
                        },
                        {
                            key: '3',
                            label: <NavLink to="/faq">Часто задаваемые вопросы</NavLink>
                        },
                        {
                            key: '4',
                            label: <NavLink to="/awards">Премии и награды</NavLink>
                        },
                        {
                            key: '5',
                            label: <NavLink to="/award-of-the-alexandr">Специальная премия Александра Романовского</NavLink>
                        },
                        {
                            key: '6',
                            label: <NavLink to="/actual-jury">Жюри</NavLink>
                        },
                    ],
                },
            },
            {
                title: <NavLink exact to="/posts">Новости и статьи</NavLink>,
            },
            {
                title: <NavLink exact to="/contacts">Контакты</NavLink>,
            },
            {
                title: 'О нас',
                menu: {
                    items: [
                        {
                            key: '1',
                            label: <NavLink exact to="/comitet">Организационный комитет</NavLink>
                        },
                        {
                            key: '2',
                            label: <a href="https://www.mmdm.ru/">ММДМ</a>
                        }
                    ]
                }
            }
        ];

        return <Breadcrumb style={{fontSize: 18, fontWeight: "bold", paddingBottom: 50}} items={breadcrumbItems}/>;
    }
;

export default App;
