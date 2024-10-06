import {Feather} from '@expo/vector-icons'
import {Container, TaskText, TaskCheck, TaskIcon} from "./styles";
import { TaskProps } from '../../Utils/types';

export function Task(props: TaskProps){
    return(
        <Container onPress={props.onPress} isFinished={props.isFinished}>
            <TaskCheck onPress={props.onCheck} >
             {props.isFinished && <Feather name="check-square" size={24} color="black" />}
             {!props.isFinished && <Feather name="square" size={24} color="black" />}
            </TaskCheck>
            <TaskText isFinished={props.isFinished}> {props.title} </TaskText>
            <TaskIcon>
              {props.isFinished && <Feather name="check" size={24} color="black" />}
              {!props.isFinished && <Feather name="clock" size={24} color="black" />}
            </TaskIcon>
        </Container>
    );
}