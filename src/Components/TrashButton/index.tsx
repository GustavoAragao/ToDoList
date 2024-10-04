import {Feather} from '@expo/vector-icons'
import { ContainerTrash } from './styles'

export function TrashButton({ onPress }: { onPress: () => void }){
  return(
      <ContainerTrash onPress = {onPress}><Feather name = "trash-2" size = {24} color="#C71E1E"/></ContainerTrash>
  );
}