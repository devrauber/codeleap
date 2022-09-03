import React from "react";
import { Control } from 'react-hook-form';
import { Input } from './styles'

interface Input1Props{
    style?: React.CSSProperties;
    children?: React.ReactNode;
    placeholder: string;
    required?: any
    name?: string;
    control?: Control<any>;
};

const Input1: React.FC<Input1Props> = function ({
    style,
    children,
    placeholder,
    required,
    name,
    control
}){
    return(
        <Input control={control} style={style} name={name} placeholder={placeholder} required={required}>
            {children}
        </Input>
    )
}

export default Input1;