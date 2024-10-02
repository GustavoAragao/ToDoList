import { Container,Input, SearchButton } from "./styles";
import {Feather} from '@expo/vector-icons'

export function SearchTask(){
    return(
        <Container>
            <Input 
                placeholder="Pesquisar tarefa..."
                placeholderTextColor="black" /*no figma a cor é baseada no status da tarefa*/
                keyboardType= 'default'
             />
            <SearchButton> 
            <Feather name="search" size={24} color="#5C0F8B" />
            </SearchButton>
        </Container>

    );
};