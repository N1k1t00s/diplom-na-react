import React from 'react';
import classes from "./MySelect.module.css";
import { Select } from 'antd';

const { Option } = Select;

const MySelect = ({ options, defaultValue, value, onChange }) => {
    return (
        <Select
            // className={classes.mySelect}
            style={{ width: 150}}
            value={value}
            onChange={onChange}
        >
            <Option disabled value="">
                {defaultValue}
            </Option>
            {options.map((option) => (
                <Option key={option.value} value={option.value}>
                    {option.name}
                </Option>
            ))}
        </Select>
    );
};

export default MySelect;
