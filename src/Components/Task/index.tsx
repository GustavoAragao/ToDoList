import {Feather} from '@expo/vector-icons'

import {Container, TaskText, TaskDone, TaskDelete} from "./styles";

export function Task(){
    return(
        <Container>
            <TaskDone>
                <Feather name="square" size={24} color="black" />
            </TaskDone>
            <TaskText> Tarefa </TaskText>
            <TaskDelete>
                <Feather name="check" size={24} color="black" />
            </TaskDelete>
        </Container>
    );
}