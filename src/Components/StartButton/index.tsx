import { ContainerButton, TextButton } from "./styles";

interface propsButton{
  isSave?: boolean;
  onPress: ()=> void;
}
export function StartButton ({isSave=false,onPress}: propsButton){
  return(
    <ContainerButton onPress={onPress} isSave={isSave}>
      {!isSave && <TextButton>Começar</TextButton>}
      {isSave && <TextButton>Salvar</TextButton>}
    </ContainerButton>
  )
}