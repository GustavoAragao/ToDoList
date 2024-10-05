import AntDesign from '@expo/vector-icons/AntDesign';
import { ContainerFav, TextFav,IconFav } from './styles';
import { Text } from 'react-native';

interface CreateFavoriteTaskButtonProps {
  isFav?: boolean;
  onPress?: () => void;
}

export default function FavoriteTaskButton({isFav,onPress}: CreateFavoriteTaskButtonProps){   /*Valor padrão = false*/
  return(
    <ContainerFav onPress={onPress}>
       <IconFav>
        {!isFav && <AntDesign name="staro" size={16} color="#C71E1E" />}
        {isFav && <AntDesign name="star" size={16} color="#C71E1E" />}
       </IconFav>
      {!isFav && <TextFav> Marcar como prioridade </TextFav>}
      {isFav && <TextFav> Desmarcar como prioridade </TextFav>}
    </ContainerFav>
  )
}