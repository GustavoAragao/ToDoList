import AntDesign from '@expo/vector-icons/AntDesign';
import { Container } from './styles'

export function FavButton(){
  return(
    <Container>
        <AntDesign name="star" size={34} color= "#F8BD00" />
    </Container>
  );
}