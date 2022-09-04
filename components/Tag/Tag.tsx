import {TagProps} from "./Tag.props";
import styles from './Tag.module.css';
import cn from 'classnames';
import React from "react";

export const Tag = ({size = 'm', color = 'ghost', href, children, className, ...props}: TagProps): JSX.Element => {
    return (
        <div className={cn(styles.tag, styles[size], styles[color])}>
            {
                href
                    ? <a href={href}>{children}</a>
                    : <>{children}</>
            }
        </div>
    )
}