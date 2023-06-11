import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "./MyHeader.module.css";

const Header = (props) => {
    return (
        <div className={classes.myHeader} {...props}>
            <div className={classes.myHeaderNav} {...props}>
                <NavLink to="/">Главная страница</NavLink>
                <NavLink to="/about">О сайте</NavLink>
                <NavLink to="/posts">Посты</NavLink>
            </div>
        </div>
    );
};

export default Header;