/// <reference types="react" />
import React$1 from 'react';

declare const Breadcrumbs: () => React$1.JSX.Element;

type ThemeMode = "dark" | "light";
type size = "large" | "medium" | "small";
type theme = "primary" | "warning" | "success" | "danger";
interface tableConfig {
    selectAll?: boolean;
    checkbox?: boolean;
    paginationRequired?: boolean;
    mode?: ThemeMode;
    title: string | JSX.Element;
    columns: ColumnProps[];
    showHeaderCount?: boolean;
    minHeight?: string;
}
interface HoverActionProp {
    name: string;
    onclick: (item: any) => any;
}
interface ColumnProps {
    render?: (item: any) => JSX.Element | string;
    name: string;
    id: string;
    searchable?: boolean;
    sortable?: boolean;
    hoverAction?: HoverActionProp[];
    hideAble?: boolean;
    hideOnstart?: boolean;
    highLight?: {
        color: string;
    };
}
interface TableProps {
    records: any[];
    pageSize: number;
    config: tableConfig;
}

type BadgeProps<T> = {
    label: T;
    bgColor?: string;
    size?: size;
    type?: "bordered" | "default";
    theme?: theme;
    style?: React.CSSProperties;
    title?: React.ReactElement | string;
};
interface CircleBadgeProps<T> {
    labels: T[];
    size?: size;
    type?: theme;
    customColor?: {
        background: string;
        border: string;
    };
    style?: React.CSSProperties;
    title?: React.ReactElement | string;
}

declare const Badge: (props: BadgeProps<string>) => React$1.JSX.Element;

declare const CircleBadge: (props: CircleBadgeProps<string>) => React$1.JSX.Element;

declare const Table: ({ records, config, pageSize }: TableProps) => React$1.JSX.Element;

type Options = {
    name: string | JSX.Element | number;
    value: any;
};
interface SelectProps {
    options: Options[];
    onchangeHandler: (e: any) => any;
    selected?: any;
    label?: JSX.Element | string | number;
    labelPosition?: "left" | "right" | "above" | "below";
}
declare const Select: (props: SelectProps) => React$1.JSX.Element;

interface InputProps<T> {
    onchangeHandler: (value: React.ChangeEvent<HTMLInputElement>) => any;
    type?: "number" | "text" | "email" | "file" | "checkbox" | "range";
    max?: number;
    min?: number;
    value: T;
    label?: JSX.Element | string | number;
    labelPosition?: "left" | "right" | "above" | "below";
    placeholder?: string;
    multiple?: boolean;
    otherProps?: Record<string, number>;
    style?: React.CSSProperties;
    className?: string;
    debounceTime?: number;
}

declare const Input: React$1.ForwardRefExoticComponent<InputProps<string | number> & React$1.RefAttributes<HTMLInputElement>>;

interface TableFooterComp {
    rowCount?: number | string;
    handleInputChange: (e: any) => any;
    totalPage?: number;
    currentPagination?: string | number;
    paginationRequired?: boolean;
    changeItemPerPage: (e: any) => any;
    paginationOptions: any[];
    itemPerPage?: number;
}
declare const TableFooter: ({ rowCount, handleInputChange, totalPage, currentPagination, paginationRequired, changeItemPerPage, paginationOptions, itemPerPage, }: TableFooterComp) => React$1.JSX.Element;

interface TableHeaderProps {
    title?: string | JSX.Element;
    searchInTable?: (e: any) => any;
    searchText?: string;
    changeTheme?: (e: any) => any;
    clearInput?: (e: any) => any;
    mode?: string;
}
declare const TableHeader: ({ searchInTable, title, clearInput, searchText, mode, changeTheme, }: TableHeaderProps) => React$1.JSX.Element;

type themeTypes = "light" | "dark" | "dark-pink" | any;
type ContextType = {
    theme: themeTypes;
    toggleTheme: (newTheme: themeTypes) => any;
};
declare const ThemeContext: React$1.Context<ContextType>;

declare const ThemeProvider: (props: any) => React$1.JSX.Element;

export { Badge, Breadcrumbs, CircleBadge, Input, Select, Table, TableFooter, TableHeader, ThemeContext, ThemeProvider };
