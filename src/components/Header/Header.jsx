import React from 'react';
import {Link} from "react-router-dom";
import classes from "./MyHeader.module.css";

const Header = (props) => {
    return (
        <div className={classes.myHeader} {...props}>
            <div className={classes.myHeaderNav} {...props}>
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    );
};

export default Header;