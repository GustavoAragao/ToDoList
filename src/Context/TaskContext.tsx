
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TaskProps } from '../Utils/types';
import { createContext, ReactNode, useEffect, useState } from "react";
import { Alert } from 'react-native';

interface TaskContextData {
  tasks: TaskProps[];
  createTask: (task: TaskProps) => void;
  updateTask: (id: number, updatedTask: TaskProps) => void;
  deleteTask: (id: number) => void;
  loadTasks: () => void;
  handleTaskStatus: (taskToChange: TaskProps) => void;
  clearTasks: () => void;
};

export const TaskContext = createContext<TaskContextData>({
  tasks: [],
  createTask: () => {},
  updateTask: () => {},
  deleteTask: () => {},
  clearTasks: () => {},
  handleTaskStatus: () => {},
  loadTasks: () => {},
});

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('@tasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error('Failed to load tasks from AsyncStorage:', error);
    }
  };

  const clearTasks = async () => {
    try {
      Alert.alert(
        "Atenção", 
        `Deseja realmente excluir todas as tarefas?`, 
        [
          {
            text: "Sim",
            onPress: () => {
              AsyncStorage.clear();
              setTasks([]); 
            }
          },
          {
            text: "Cancelar",
            style: "cancel"
          }
        ]
      );
    } catch (error) {
      console.error('Failed to load tasks from AsyncStorage:', error);
    }
  }

  const saveTasksToStorage = async (tasks: TaskProps[]) => {
    try {
      await AsyncStorage.setItem('@tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('Failed to save tasks to AsyncStorage:', error);
    }
  };

  const createTask = (task: TaskProps) => {
    const newTask = { ...task, id: tasks.length + 1 };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    saveTasksToStorage(updatedTasks);
  };

  const updateTask = (id: number, updatedTask: TaskProps) => {
    const updatedTasks = tasks.map((task) => (task.id === id ? updatedTask : task));
    setTasks(updatedTasks);
    saveTasksToStorage(updatedTasks);
  };

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    saveTasksToStorage(updatedTasks);
  };

  const handleTaskStatus = (taskToChange: TaskProps) => {
    const updatedTasks = tasks.map((task) => {
      if (task.title === taskToChange.title) {
        // Inverte o status da tarefa
        return {
          ...task,
          isFinished: !task.isFinished,
        };
      }
      return task;
    });
    setTasks(updatedTasks); // Atualiza o estado com a lista de tarefas modificadas
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        updateTask,
        clearTasks,
        deleteTask,
        handleTaskStatus,
        loadTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};