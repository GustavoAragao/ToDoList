import {Feather} from '@expo/vector-icons'
import {Container, TaskText, TaskDone, TaskIcon} from "./styles";


export function Task(){
    return(
        <Container>
            <TaskDone>
                <Feather name="square" size={24} color="black" />
            </TaskDone>
            <TaskText> Tarefa </TaskText>
            <TaskIcon>
                <Feather name="check" size={24} color="black" />
            </TaskIcon>
        </Container>
    );
}