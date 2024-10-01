import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 320px;
    height: 37px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    overflow: hidden;
    border-width: 2px;  /* Define a largura da borda */
    border-color: #5C0F8B; /*no figma a cor é baseada no status da tarefa*/   
`;

export const TextValue = styled.Text`
    color: black; /*no figma a cor é baseada no status da tarefa*/
    font-size: 14px;
`;
export const SearchButton = styled.TouchableOpacity`
    width: 15%;
    justify-content: center;
    align-items: center;
`;