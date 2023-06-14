import React from 'react';
import classes from "./MyButton.module.css";
import {Button} from 'antd';

const MyButton = ({children, ...props}) => {
    return (
        // <button {...props} className={classes.myBtn}>
        //     {children}
        // </button>
        <Button type="primary" block={true} {...props}>{children}</Button>
    );
};

export default MyButton;