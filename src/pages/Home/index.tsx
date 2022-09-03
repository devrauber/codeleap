import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.jpeg'
import { Button, Logo } from "./styles"

export default function Home(){
    const navigate = useNavigate();

    function handleClick(){
        navigate('/register')
    }

    return(
        <Button onClick={handleClick}>
            <Logo src={logo} alt="logo" />
        </Button>
    )
}