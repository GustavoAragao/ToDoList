import { Container,TextValue, SearchButton } from "./styles";
import {Feather} from '@expo/vector-icons'

export function SearchTask(){
    return(
        <Container>
            <TextValue> Pesquisar tarefa...</TextValue>
            <SearchButton> 
            <Feather name="search" size={24} color="#5C0F8B" />
            </SearchButton>
        </Container>

    );
};