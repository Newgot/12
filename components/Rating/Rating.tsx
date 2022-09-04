import React, {useEffect, useState, KeyboardEvent} from "react";
import {RatingProps} from "./Rating.props";
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg'

export const Rating = ({isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

    useEffect(() => {
        constructRating(rating)
    }, [rating])

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <span
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onClick(i + 1)}
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.editable]: isEditable
                    })}
                >
                    <StarIcon
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
                    />
                </span>
            )
        })
        setRatingArray(updatedArray);
    }

    const changeDisplay = (i: number) => {
        if (!isEditable) return;
        constructRating(i)
    };

    const onClick = (i: number) => {
        if (setRating) {
            setRating(i)
        }
    }

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
        if (e.code !== 'Space') return;
        if (setRating) {
            setRating(i)
        }
    }

    return (
        <div {...props}>
            {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
        </div>
    )
}