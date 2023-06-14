import React from 'react';
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";
import {Space} from 'antd';

const PostFilter = ({filter, setFilter}) => {
    return (<div>
        <Space.Compact block wrap size="large">
        <MyInput
            value={filter.query}
            onChange={e => setFilter({...filter, query: e.target.value})}
            placeholder="Поиск..."
        />
        <MySelect
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            defaultValue="Сортировка"
            options={[{value: 'title', name: 'По названию'}, {value: 'body', name: 'По описанию'},]}
        />
            </Space.Compact>
    </div>);
};

export default PostFilter;