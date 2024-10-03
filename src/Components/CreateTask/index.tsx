import {Feather} from '@expo/vector-icons'
import { ContainerCreate, TextCreate } from './styles'

interface CreateTaskProps {
  isGreen?: boolean;
  onPress?: () => void;
}

export function CreateTask({isGreen = false, onPress}: CreateTaskProps){   /*Valor padrão = false*/
  return(
    <ContainerCreate isGreen={isGreen} onPress={onPress}>
      <Feather name = "plus" size={24} color={'white'}></Feather>
      <TextCreate>Criar tarefa</TextCreate>
    </ContainerCreate>
  )
}