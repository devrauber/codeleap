import React from "react";
import { Title } from './styles'

interface TitleProps{
    style?: React.CSSProperties;
    children?: React.ReactNode;
};

const Title1: React.FC<TitleProps> = function ({
    style,
    children,
}){
    return(
        <Title style={style}>
            {children}
        </Title>
    )
}

export default Title1;