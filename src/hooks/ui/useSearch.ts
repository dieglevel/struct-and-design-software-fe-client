'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { debounce } from 'lodash';
import { ChangeEvent } from 'react';

type QueryType = 'limit' | 'page' | 'searchField' | 'keywords' | 'sort' | 'totalPage' | string;

enum QueryEnum {
    LIMIT = 'limit',
    PAGE = 'page',
    SEARCH_FIELD = 'searchField',
    KEYWORDS = 'keywords',
    FILTER = 'filters',
    TOTALPAGE = 'totalPage',
    SORT = 'sort',
}

function useSearch() {
    const params = useSearchParams();
    const router = useRouter();

    const updateQuery = (key: string, value?: string) => {
        const current = new URLSearchParams(Array.from(params.entries()));
        if (value === undefined || value === '') {
            current.delete(key);
        } else {
            current.set(key, value);
        }
        router.replace(`?${current.toString()}`);
    };

    const onTypeSearchChange = (type: string) => {
        updateQuery(QueryEnum.SEARCH_FIELD, type);
    };

    const setDefaultTypeSearch = (type: string) => {
        updateQuery(QueryEnum.SEARCH_FIELD, type);
    };

    const setTypeSort = (type: string) => {
        updateQuery(QueryEnum.SORT, type);
    };

    const getQueryField = (type: QueryType): string => {
        return params.get(type) ?? '';
    };

    const onSearchChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        updateQuery(QueryEnum.KEYWORDS, text);
    }, 400);

    const setLimit = (limit?: number) => {
        updateQuery(QueryEnum.LIMIT, limit ? limit.toString() : '');
    };

    const setPage = (page?: number) => {
        updateQuery(QueryEnum.PAGE, page ? page.toString() : '');
    };

    const setTotalPage = (totalPage?: number) => {
        updateQuery(QueryEnum.TOTALPAGE, totalPage ? totalPage.toString() : '');
    };

    return {
        onSearchChange,
        setDefaultTypeSearch,
        onTypeSearchChange,
        getQueryField,
        setPage,
        setTypeSort,
        setLimit,
        setTotalPage,
    };
}

export default useSearch;
