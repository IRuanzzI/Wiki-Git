import styled from "styled-components";

export const ButtonContainer = styled.button`

    background-color:  #FAFAFA;
    border: 1px solid #FAFAFA;
    border-radius: 20px;

    height: 62px;
    width: 60%;

    margin: 20px;
 
    font-size: 20px;

    &: hover{
        background-color: #FAFAFA6D;
        cursor: pointer;
    
    }
    
    &:active{
        background-color: #FF0000;
        color: #FAFAFA;

    }

`