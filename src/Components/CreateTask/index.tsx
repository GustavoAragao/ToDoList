import {Feather} from '@expo/vector-icons'
import { ContainerCreate, TextCreate } from './styles'

interface CreateTaskProps {
  isGreen?: boolean;
}

export function CreateTask({isGreen = false}: CreateTaskProps){   /*Valor padrão = false*/
  return(
    <ContainerCreate isGreen={isGreen}>
      <Feather name = "plus" size={24} color={'white'}></Feather>
      <TextCreate>Criar tarefa</TextCreate>
    </ContainerCreate>
  )
}