import {PProps} from "./P.props";
import styles from './P.module.css';
import cn from 'classnames';
import React from "react";

export const P = ({children, size = 'm', className, ...props} :PProps): JSX.Element => {
    return (
        <p className={cn(styles.p, styles[size])}>
            {children}
        </p>
    )
}