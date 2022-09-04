import {HtmlHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export interface TagProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: 's' | 'm';
    children: ReactNode;
    color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary';
    href?: string
}