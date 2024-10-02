import { ContainerButton, TextButton } from "./styles";

export function StartButton ({ onPress }: { onPress: () => void }){
  return(
    <ContainerButton onPress={onPress}>
      <TextButton>Começar</TextButton>
    </ContainerButton>
  )
}