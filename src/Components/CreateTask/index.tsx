import {Feather} from '@expo/vector-icons'
import { ContainerCreate, TextCreate } from './styles'

export function CreateTask(){
  return(
    <ContainerCreate>
      <Feather name = "plus" size={24} color={'white'}></Feather>
      <TextCreate>Criar tarefa</TextCreate>
    </ContainerCreate>
  )
}