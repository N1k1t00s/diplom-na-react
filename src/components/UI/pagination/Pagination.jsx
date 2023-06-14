import React from 'react';
import { Pagination } from 'antd';

const itemRender = (_, type, originalElement) => {
    if (type === 'prev') {
        return <a>Previous</a>;
    }
    if (type === 'next') {
        return <a>Next</a>;
    }
    return originalElement;
};

const MyPagination = ({ totalPages, page, changePage }) => {
    const handlePageChange = (pageNumber) => {
        changePage(pageNumber);
    };

    return (
        <div className="page__wrapper">
            <Pagination
                total={totalPages}
                current={page}
                itemRender={itemRender}
                pageSize={1}
                onChange={handlePageChange}
                showSizeChanger={false}
            />
        </div>
    );
};

export default MyPagination;
