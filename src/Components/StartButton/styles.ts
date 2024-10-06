import styled from "styled-components/native";

interface propsStyleButton{
  isSave?: boolean;
}
export const ContainerButton = styled.TouchableOpacity<propsStyleButton>`
  width: 150px;
  height: 45px;
  border-radius: 17px;
  background-color:${({ isSave }) => (isSave ? '#4FAC67' : '#5C0F8B')};
  align-items: center;
  padding:5px;
`

export const TextButton = styled.Text`
 font-size: 20px;
 font-weight: bold;
 color: #FFFFFF;
`