import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 44px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    background-color: white;
    overflow: hidden;
    border-width: 3px;  /* Define a largura da borda */
    border-color: #4FAC67; /*no figma a cor é baseada no status da tarefa*/
    
`;

export const TaskText = styled.Text`
    color: #4FAC67; /*no figma a cor é baseada no status da tarefa*/
    font-size: 20px;
    font-weight: bold;

`;

export const TaskDone = styled.TouchableOpacity`
    width: 15%;
    justify-content: center;
    align-items: center;
`;

export const TaskIcon = styled.View`
    width: 15%;
    justify-content: center;
    align-items: center;
`;
