import React from 'react';
// import classes from "./Loader.module.css";
import { Spin } from 'antd';

const Loader = () => {
    return (
        <div>
            {/*className={classes.loader}*/}
            <Spin tip="Loading" size="large">
                <div className="content" />
            </Spin>
        </div>
    );
};

export default Loader;