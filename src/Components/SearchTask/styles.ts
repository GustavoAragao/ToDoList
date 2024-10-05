import styled from "styled-components/native";

export const Container = styled.View`
    width: 320px;
    height: 37px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    overflow: hidden;
    border-width: 2px; 
    border-color: #5C0F8B; 
    padding-left: 10px;
`;

export const Input = styled.TextInput`
    flex: 1;
    font-size: 14px;
`;
export const SearchButton = styled.TouchableOpacity`
    width: 15%;
    justify-content: center;
    align-items: center;
`;