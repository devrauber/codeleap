import styled from 'styled-components';

export const Button = styled.button`
    justify-content: end;
    width: 111px;
    height: 33px;
    background-color: black;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    text-transform: uppercase;
    :hover{
        opacity: 85%;
    }
    :disabled {
        background: grey; 
        border: 0;
    }
`
