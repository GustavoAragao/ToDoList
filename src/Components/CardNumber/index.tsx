import { Container,CardTitle, CardValue } from "./styles";
import {Feather} from '@expo/vector-icons'

export function CardNumber(){
    return(
        <Container>
            <Feather name="check" size={24} color="black" />
            <CardTitle> Concluídas </CardTitle>
            <CardValue> 5 </CardValue>
        </Container>

    );
};