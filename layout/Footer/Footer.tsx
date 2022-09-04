import {FooterProps} from "./Footer.props";
import styles from './Footer.module.css';
import cn from 'classnames';
import React from "react";
import {format} from 'date-fns'

export const Footer = ({className, ...props}: FooterProps): JSX.Element => {
    return (
        <footer
            className={cn(styles.footer, className)}
            {...props}
        >
            <p className={styles.left}>
                OwlTop © 2020 - {format(new Date(), 'Y')} Все права защищены
            </p>
            <div className={styles.right}>
                <a href="#" target="__blank">Пользовательское соглашение</a>
                <a href="#" target="__blank">Политика конфиденциальности</a>
            </div>
        </footer>

    )
}