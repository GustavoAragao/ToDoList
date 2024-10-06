import { Container,CardTitle, CardValue } from "./styles";
import {Feather} from '@expo/vector-icons'

interface CardNumberProps{
    pendingTasks?: number,
    finishedTasks?: number,
    isFinished: boolean,
    isPress: boolean,
    onPressIn?: () => void ;
    onPressOut?: () => void;
    onPress?: () => void;
}

export function CardNumber({pendingTasks,finishedTasks,isFinished,isPress, onPress}: CardNumberProps){
    return(
    <Container onPress = {onPress} isPress = {isPress} isFinished = {isFinished}>
        {isFinished && <Feather name="check" size={24} color="black" />}
        {!isFinished && <Feather name="clock" size={24} color="black" />}
        {isFinished && <CardTitle> Finalizadas </CardTitle>}
        {!isFinished && <CardTitle> Pendentes </CardTitle>}
        {isFinished && <CardTitle> {finishedTasks} </CardTitle>}
        {!isFinished && <CardTitle> {pendingTasks} </CardTitle>}
    </Container>
    );
};

