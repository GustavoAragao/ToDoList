import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { TrashButton } from '../../Components/TrashButton';
import { StartButton } from '../../Components/StartButton';
import FavoriteTaskButton from '../../Components/FavoriteTaskButton';
import { RouteProp, useRoute } from '@react-navigation/native';
import { TaskProps } from '../../Utils/types';
import { TaskContext } from '../../Context/TaskContext';
import { Feather } from '@expo/vector-icons';
import * as Yup from 'yup';
import { Formik } from 'formik';

type RouteParams = {
  DetailsScreen: {
    task: TaskProps;
  };
};

export default function DetailsTask({ navigation }: { navigation: any }) {
  const { deleteTask, tasks, updateTask } = useContext(TaskContext);
  const route = useRoute<RouteProp<RouteParams, 'DetailsScreen'>>();
  const { task } = route.params;

  const [isFavTask, setIsFavTask] = useState(task.isFav);

  // Validação com Yup
  const taskValidationSchema = Yup.object().shape({
    title: Yup.string()
      .min(4, 'O título deve ter no mínimo 4 caracteres')
      .max(20, 'O título deve ter no máximo 20 caracteres')
      .required('O título é obrigatório'),
    description: Yup.string()
      .max(256, 'A descrição deve ter no máximo 256 caracteres')
  });

  const handleRemoveTask = (id: number) => {
    Alert.alert(
      'Atenção',
      'Deseja realmente excluir essa tarefa?',
      [
        {
          text: 'Sim',
          onPress: () => {
            deleteTask(id);
            navigation.navigate('HomeTasks');
          },
        },
        {
          text: 'Não',
          style: 'cancel',
        },
      ]
    );
  };

  const handleUpdateTask = (values: { title: string; description: string }) => {
    const newTask: TaskProps = {
      id: task.id,
      title: values.title,
      description: values.description,
      isFinished: task.isFinished,
      isFav: isFavTask,
    };

    // Verificar se o nome já existe
    if (tasks.some((existingTask) => existingTask.title === newTask.title && existingTask.id !== newTask.id)) {
      Alert.alert('Tarefa já existe, tente outro nome');
      return;
    }

    Alert.alert(
      'Atenção',
      'Deseja realmente atualizar essa tarefa?',
      [
        {
          text: 'Sim',
          onPress: () => {
            updateTask(newTask.id, newTask);
            navigation.navigate('HomeTasks');
          },
        },
        {
          text: 'Não',
          style: 'cancel',
        },
      ]
    );
  };
  
  return (
    <Formik
      initialValues={{
        id: task.id,
        title: task.title || '', // Garante que title tenha um valor padrão
        description: task.description || '', // Garante que description tenha um valor padrão
      }}
      validationSchema={taskValidationSchema}
      onSubmit={(values) => handleUpdateTask(values)}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <View style={{ flexDirection: 'row', alignSelf: 'center', gap: 10 }}>
            <TextInput
              style={styles.inputTitle}
              multiline={true}
              onChangeText={handleChange('title')}
              value={values.title}
            />
            <Feather name="edit" size={24} color="black" />
          </View>

          {touched.title && errors.title && <Text style={styles.errorText}>{errors.title}</Text>}

          <Text style={{ alignSelf: 'flex-start', marginTop: 15 }}>Descrição: (clique no texto para editá-lo)</Text>
          <View style={styles.containerDesc}>
            <TextInput
              style={{ textAlign: 'center', width: '100%', flex: 1 }}
              multiline={true}
              onChangeText={handleChange('description')}
              value={values.description}
            />
          </View>

          {touched.description && errors.description && <Text style={styles.errorText}>{errors.description}</Text>}

          <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
            <FavoriteTaskButton isFav={isFavTask} onPress={() => setIsFavTask(!isFavTask)} />
          </View>

          <View style={styles.optionsButtons}>
            <TrashButton onPress={() => handleRemoveTask(task.id)} />
            <StartButton isSave={true} onPress={handleSubmit as any} />
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    padding: 16,
    paddingTop: 64,
    gap: 10,
  },
  containerDesc: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
  },
  optionsButtons: {
    marginBottom: 20,
    paddingHorizontal: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  inputTitle: {
    width: 'auto',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: -10,
  },
});
