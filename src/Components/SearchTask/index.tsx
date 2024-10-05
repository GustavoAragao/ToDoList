import { Container,Input, SearchButton } from "./styles";
import {Feather} from '@expo/vector-icons'

export function SearchTask({ setTaskName, taskName,onPress}: any){
    return(
        <Container>
            <Input 
                placeholder="Pesquisar tarefa..."
                placeholderTextColor="black" /*no figma a cor é baseada no status da tarefa*/
                keyboardType= 'default'
                onChangeText={setTaskName}
                value = {taskName}
             />
            <SearchButton onPress={onPress}> 
            <Feather name="search" size={24} color="#5C0F8B" />
            </SearchButton>
        </Container>

    );
};