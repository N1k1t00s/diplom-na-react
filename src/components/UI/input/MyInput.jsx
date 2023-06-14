import React from 'react';
import classes from "../input/MyInput.module.css";
import { Input } from 'antd';

const MyInput = (props) => {
    return (
        // <input className={classes.myInput} {...props}/>
        <Input placeholder="Basic usage"{...props}/>
    );
};

export default MyInput;