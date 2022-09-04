import {ButtonProps} from "./Button.props";
import styles from './Button.module.css';
import ArrowIcon from './arrow.svg'
import cn from 'classnames';
import React from "react";

export const Button = ({appearance, arrow = 'none', children, className, ...props}: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(styles.button, styles[appearance], className)}
            {...props}
        >
            {children}
            {arrow !== 'none' &&
                <span
                className={cn(styles.arrow, styles[arrow])}
                >
                    <ArrowIcon/>
                </span>
            }
        </button>
    )
}