'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { debounce } from 'lodash';
import { ChangeEvent } from 'react';

type QueryType = 'limit' | 'page' | 'searchField' | 'keywords' | 'sort' | 'totalPage' | 'min' | 'max' | 'category' | 'destination' | 'day' | string;

export enum QueryEnum {
    LIMIT = 'limit',
    PAGE = 'page',
    SEARCH_FIELD = 'searchField',
    KEYWORDS = 'keywords',
    FILTER = 'filters',
    TOTALPAGE = 'totalPage',
    SORT = 'sort',
    MIN = 'min',
    MAX = 'max',
    CATEGORY = 'category',
    DESTINATION = 'destination',
    DAY = 'day'
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
    const setQueryField = (type: QueryType, value: string) => {
        updateQuery(type, value)
    }
    const getQueryField = (type: QueryType): string => {
        return params.get(type) ?? '';
    };
    const setMinMaxQuery = (min: string, max: string) => {
        const current = new URLSearchParams(Array.from(params.entries()));

        if (min === undefined || max === '' || max === undefined || min === '') {
            current.delete(QueryEnum.MAX);
            current.delete(QueryEnum.MIN);
            current.delete(QueryEnum.PAGE);
        } else {
            current.set(QueryEnum.MAX, max)
            current.set(QueryEnum.MIN, min)
            current.set(QueryEnum.PAGE, '1')
        }
        router.replace(`?${current.toString()}`);
    }

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
        setQueryField,
        setMinMaxQuery
    };
}

export default useSearch;
