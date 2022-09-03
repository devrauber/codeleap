import React from "react";
import { Button } from './styles'

interface ButtonProps{
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<Element> | undefined
    disabled?: boolean
};

const Buttons: React.FC<ButtonProps> = function ({
    style,
    children,
    onClick,
    disabled
}){
    return(
        <Button style={style} onClick={onClick} disabled={disabled}>
            {children}
        </Button>
    )
}

export default Buttons;