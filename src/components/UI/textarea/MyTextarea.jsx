import React from 'react';
// import classes from "./MyTextarea.module.css";
import {Input} from 'antd';

const {TextArea} = Input;

const MyTextarea = (props) => {
    return (
        <div>
            <TextArea
                value={props.value} // Добавляем значение из пропсов
                onChange={props.onChange} // Добавляем обработчик изменения из пропсов
                placeholder={props.placeholder}
                autoSize={{
                    minRows: 2,
                    maxRows: 6,
                }}
                style={{width: 400}}
            />
            <div
                style={{
                    margin: '24px 0',
                }}
            />
        </div>
    );
};

export default MyTextarea;