import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    flex: 1;
    width: 200px;
    padding : 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #4FAC67;
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
