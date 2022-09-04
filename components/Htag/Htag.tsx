import {HtagProps} from "./Htag.props";
import React from "react";
import styles from './Htag.module.css'

export const Htag = ({tag, children}: HtagProps): JSX.Element => {
    if (tag === 'h1') {
        return <h1 className={styles.h1}>{children}</h1>
    } else if (tag === 'h2') {
        return <h2 className={styles.h2}>{children}</h2>
    } else if (tag === 'h3') {
        return <h3 className={styles.h3}>{children}</h3>
    } else {
        return <>{children}</>;
    }
}