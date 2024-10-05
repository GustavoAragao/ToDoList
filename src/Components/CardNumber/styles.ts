import styled from "styled-components/native";

interface CardNumberStylesProps{
    isFinished: boolean;
}

export const Container = styled.TouchableOpacity<CardNumberStylesProps>`
    flex: 1;
    width: 200px;
    padding : 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ isFinished }) => (isFinished? '#4FAC67' : '#F1950C')};
    border-radius: 10px;
    overflow: hidden;
    margin-right: 5px;
`;

export const CardTitle = styled.Text`
    color: #ffff; 
    font-size: 16px;
    font-weight: bold;

`;

export const CardValue = styled.Text`
    color: #ffff; 
    font-size: 20px;
`;
