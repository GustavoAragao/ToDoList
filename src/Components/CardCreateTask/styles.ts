import styled from "styled-components/native";

export const Container = styled.View`
    width: 95%;
    height: 250px;
    padding: 10px;
    padding-left: 16px;
    padding-right: 16px;
    justify-content: flex-start;
    background-color: #5C0F8B;
    border-radius: 20px;
    overflow: hidden;
`;

export const CardTitle = styled.Text`
    padding-top: 10px;
    align-self: center;
    color: #ffff; 
    font-size: 32px;
    font-weight: bold;
`;


export const Input = styled.TextInput`
    width: 100%;
    font-size: 16px;
    border-bottom-width: 1px;  /* Define a linha apenas na parte inferior */
    border-bottom-color: #ffff;
    color: #ffff;  /* Cor do texto */
    margin-bottom: 16px;  /* Espaçamento entre o campo e o próximo elemento */
    padding: 5px;
`;
