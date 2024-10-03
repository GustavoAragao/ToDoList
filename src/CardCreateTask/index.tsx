import { Container, CardTitle,Input } from "./styles";
import { Text } from "react-native";

export function CardCreateTask(){
    return(
        <Container>
            <CardTitle> Criar Tarefa</CardTitle>
            <Text style= {{ color: '#ffff' }} >Nome</Text>
            <Input 
                keyboardType= 'default'
             />
            <Text style= {{ color: '#ffff' }} >Descrição</Text>
             <Input 
                keyboardType= 'default'
             />
        </Container>

    );
};