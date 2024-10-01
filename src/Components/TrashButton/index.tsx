import {Feather} from '@expo/vector-icons'
import { ContainerTrash } from './styles'

export function TrashButton(){
  return(
      <ContainerTrash><Feather name = "trash-2" size = {24} color="red"/></ContainerTrash>
  );
}