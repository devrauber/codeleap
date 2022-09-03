import React from "react";
import { Label } from './styles'

interface Label1Props{
    style?: React.CSSProperties;
    children?: React.ReactNode;
};

const Label1: React.FC<Label1Props> = function ({
    style,
    children,
}){
    return(
        <Label style={style}>
            {children}
        </Label>
    )
}

export default Label1;