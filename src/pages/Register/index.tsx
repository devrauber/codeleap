import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Background from "../../components/Background";
import Buttons from "../../components/Buttons";
import Input1 from "../../components/Input1";
import Label1 from "../../components/Label1";
import Title1 from "../../components/Title1";
import { Content } from "./styles"

export default function Register(){
    const[isNotAvaible, setIsNotAvaible] = useState(true)
    const[inputValue, setInputValue] = useState('')
    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            inputName: ''
        },
    });
    
    const onSubmit = () => {
        if(inputValue.length > 2){
            navigate("/timeline")          
        }
        else{
            alert("Você obrigatóriamente precisa inserir algum nome com mais de 2 caractéres ")
        }
    }
    console.log(isNotAvaible)

    useEffect(() => {
        if(inputValue.length > 2){
        setIsNotAvaible(false)
        }
        else{
            setIsNotAvaible(true)
        }
    }, [inputValue])
    

    return(
        <Background>
            <Content>
                <Title1>Welcome to CodeLeap network!</Title1>
                <Label1 style={{marginBottom: 13}}>Please enter your username</Label1>
                <Input1 name="inputName" control={control} required placeholder="John doe" onChange={(e: any) => setInputValue(e.target.value)}/>
                <Buttons disabled={isNotAvaible} style={{ marginTop: 20, marginLeft: 337 }} onClick={handleSubmit(onSubmit)}>Enter</Buttons>
            </Content>
        </Background>
    )
}