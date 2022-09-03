import React from "react";
import { Container } from './styles'

export default function Background( props: any ){
    return(
        <Container>
            {props.children}
        </Container>
    )
}