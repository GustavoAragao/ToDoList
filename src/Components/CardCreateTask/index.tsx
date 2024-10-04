import { Container, CardTitle, Input } from './styles';
import { Text } from 'react-native';

export function CardCreateTask({ setTaskName, setTaskDescription, taskName,taskDescription }: any) {
  return (
    <Container>
      <CardTitle>Criar Tarefa</CardTitle>
      <Text style={{ color: '#ffff' }}>Nome</Text>
      <Input
        keyboardType="default"
        onChangeText={setTaskName}
        value = {taskName}
      />
      <Text style={{ color: '#ffff' }}>Descrição</Text>
      <Input
        keyboardType="default"
        onChangeText={setTaskDescription}
        value = {taskDescription}
      />
    </Container>
  );
}
