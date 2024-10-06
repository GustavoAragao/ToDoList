import styled from "styled-components/native";

interface ContainerProps {
  isGreen?: boolean;
}

export const ContainerCreate = styled.TouchableOpacity<ContainerProps>`
  width: 172px;
  height: 42px;
  align-items:center;
  flex-direction: row;
  justify-content:center;
  background-color: ${({ isGreen }) => (isGreen ? '#4FAC67' : '#5C0F8B')};
  border-radius: 20px;
  gap: 8px
`
export const TextCreate = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
`