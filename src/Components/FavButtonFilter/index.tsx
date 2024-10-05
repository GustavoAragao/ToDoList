import AntDesign from '@expo/vector-icons/AntDesign';
import { Container } from './styles'


interface CreateFavButtonFilterProps {
  isPress?: boolean,
  onPress?: () => void;
}


export function FavButtonFilter({isPress = false, onPress}: CreateFavButtonFilterProps){
  return(
    <Container isPress={isPress} onPress={onPress}>
      <AntDesign name="star" size={34} color= "#F8BD00" />
    </Container>
  );
}