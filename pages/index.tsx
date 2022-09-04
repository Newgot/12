import React, {useEffect, useState} from "react";
import {Button, Htag, P, Rating, Tag} from "../components";
import {withLayout} from "../layout/Layout";

const Home = (): JSX.Element => {

    const [rating, setRating] = useState(4)

    return (
        <>
            <Htag tag="h1">Text</Htag>
            <Button
                appearance="primary"
                arrow="down"
            >
                Button
            </Button>
            <Button appearance="ghost">Button</Button>
            <P size="s">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, quod.
            </P>
            <P>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, quod.
            </P>
            <P size="l">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, quod.
            </P>
            <Tag size='s'>
                Min
            </Tag>
            <Tag size='s' color='red' href='http://localhost:3000/'>
                Min
            </Tag>

            <Tag size='m' color='green'>
                Min
            </Tag>
            <Tag color='primary'>
                Min
            </Tag>
            <Rating rating={rating} isEditable={true} setRating={setRating}/>
            <Rating rating={2} isEditable={false}/>
        </>
    );
}

export default withLayout(Home)
