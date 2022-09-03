import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Background from "../../components/Background";
import Buttons from "../../components/Buttons";
import Input1 from "../../components/Input1";
import Label1 from "../../components/Label1";
import Title1 from "../../components/Title1";
import { Content } from "./styles"

export default function Register(){
    const[isNotAvaible, setIsNotAvaible] = useState(false)
    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        setError,
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            inputName: ''
        },
    });
    
    const onSubmit = (name: any) => {
        console.log(name.inputName)
        if(name.inputName !== ""){
            setIsNotAvaible(false)
            navigate("/timeline")
        }
        else{
            setError('inputName', {
                type: 'manual',
                message: "deu ruim"
            })
            
        }
    }

    return(
        <Background>
            <Content>
                <Title1>Welcome to CodeLeap network!</Title1>
                <Label1 style={{marginBottom: 13}}>Please enter your username</Label1>
                <Input1 control={control} name="inputName" required placeholder="John doe"/>
                <Buttons disabled={isNotAvaible} style={{ marginTop: 20, marginLeft: 337 }} onClick={handleSubmit(onSubmit)}>Enter</Buttons>
            </Content>
        </Background>
    )
}