import { Alert, StyleSheet, Text, View } from 'react-native';
import { StartButton } from '../../Components/StartButton';
import { CardCreateTask } from '../../Components/CardCreateTask';
import CreateTaskButton from '../../Components/CreateTaskButton';
import { useState, useContext } from 'react';
import { TaskProps } from '../../Utils/types';
import { TaskContext } from '../../Context/TaskContext';
import FavoriteTaskButton from '../../Components/FavoriteTaskButton';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function CreateTask({ navigation }: { navigation: any }) {
  console.log("Tela CreateTask abriu");

  const { createTask, tasks } = useContext(TaskContext);
  const [isFavTask, setIsFavTask] = useState(false);

  // Validação com Yup
  const taskValidationSchema = Yup.object().shape({
    title: Yup.string()
      .min(4, 'O nome da tarefa deve ter no mínimo 4 caracteres')
      .max(20, 'O nome da tarefa deve ter no máximo 20 caracteres')
      .required('O nome da tarefa é obrigatório'),
    description: Yup.string()
      .max(256, 'A descrição deve ter no máximo 256 caracteres'),
  });

  const handleCreateTask = (values: { id: number; title: string; description: string;}) => {
    const newTask: TaskProps = {
      id: values.id,
      title: values.title,
      description: values.description,
      isFinished: false,
      isFav: isFavTask,
    };

    // Verificação se o nome da tarefa já existe
    if (tasks.some((task) => task.title === newTask.title)) {
      Alert.alert('Tarefa já existe, tente outro nome');
      return;
    } else {
      createTask(newTask);
      navigation.navigate('HomeTasks'); // Volta para a tela anterior após criar a tarefa
    }
  };

  return (
    <Formik
      initialValues={{ id:0, title: '', description: '' }}
      validationSchema={taskValidationSchema}
      onSubmit={(values) => handleCreateTask(values)}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <CardCreateTask
            setTaskName={handleChange('title')}
            setTaskDescription={handleChange('description')}
            taskName={values.title}
            taskDescription={values.description}
          />

          {touched.title && errors.title && <Text style={styles.errorText}>{errors.title}</Text>}
          {touched.description && errors.description && <Text style={styles.errorText}>{errors.description}</Text>}

          <View style={styles.favoriteTaskView}>
            <FavoriteTaskButton isFav={isFavTask} onPress={() => setIsFavTask(!isFavTask)} />
          </View>

          <View style={styles.optionsToCreate}>
            <CreateTaskButton isGreen={true} onPress={handleSubmit as any} />
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    paddingVertical:10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 16,
  },
  optionsToCreate: {
    marginBottom: 20,
    gap: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  favoriteTaskView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: -10,
  },
});
