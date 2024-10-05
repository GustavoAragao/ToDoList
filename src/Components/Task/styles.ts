import styled from 'styled-components/native';


interface ContainerProps {
    isFinished?: boolean;
}
  
export const Container = styled.TouchableOpacity<ContainerProps>`
    width: 100%;
    height: 44px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    background-color: white;
    overflow: hidden;
    border-width: 3px;
    border-color: ${({ isFinished}) => (isFinished? '#4FAC67' : '#F1950C')};
    margin-bottom: 20px;  
`;

export const TaskText = styled.Text<ContainerProps>`
    color:  ${({ isFinished }) => (isFinished? '#4FAC67' : '#F1950C')};
    font-size: 20px;
    font-weight: bold;

`;

export const TaskCheck = styled.TouchableOpacity`
    width: 15%;
    justify-content: center;
    align-items: center;
`;

export const TaskIcon = styled.View`
    width: 15%;
    justify-content: center;
    align-items: center;
`;
