
import { Container,HighlightedText,TextHome} from "./styles";
import { Image} from 'react-native';

export function StartHome(){
  return(
    <Container>
      <Image
         source={require('../../../assets/HomeImage.png')}
      />
    <TextHome>Simplifique, Organize e Mude o <HighlightedText>Seu Dia</HighlightedText></TextHome>
    </Container>
  )
}
