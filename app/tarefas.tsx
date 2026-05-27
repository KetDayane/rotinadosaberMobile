import React, { useMemo, useState } from 'react';
import {
  Alert,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, Check, ClipboardList, Plus } from 'lucide-react-native';

type Task = {
  id: number;
  done: boolean;
  title: string;
};

export default function Tarefas() {
  const router = useRouter();
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Revisar os resumos de hoje', done: false },
  ]);

  const nextTaskId = useMemo(
    () => Math.max(0, ...tasks.map((task) => task.id)) + 1,
    [tasks],
  );

  function addTask() {
    const title = taskText.trim();

    if (!title) {
      Alert.alert('Lista de tarefas', 'Digite uma tarefa antes de adicionar.');
      return;
    }

    setTasks((currentTasks) => [
      ...currentTasks,
      { id: nextTaskId, title, done: false },
    ]);
    setTaskText('');
  }

  function toggleTask(taskId: number) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task,
      ),
    );
  }

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor="#f7f3ff" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Pressable
              accessibilityLabel="Voltar"
              onPress={() => router.back()}
              style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}
            >
              <ArrowLeft color="#4b3a68" size={25} strokeWidth={2.4} />
            </Pressable>
            <View style={styles.headerText}>
              <Text style={styles.eyebrow}>Organizacao</Text>
              <Text style={styles.title}>Tarefas</Text>
            </View>
          </View>

          <View style={styles.hero}>
            <ClipboardList color="#ffffff" size={30} strokeWidth={2.4} />
            <Text style={styles.heroText}>Crie uma lista simples para acompanhar sua rotina.</Text>
          </View>

          <View style={styles.taskInputRow}>
            <TextInput
              onChangeText={setTaskText}
              placeholder="Criar uma tarefa"
              placeholderTextColor="#a79bb8"
              style={styles.taskInput}
              value={taskText}
            />
            <Pressable
              accessibilityLabel="Adicionar tarefa"
              onPress={addTask}
              style={({ pressed }) => [styles.addButton, pressed && styles.pressed]}
            >
              <Plus color="#ffffff" size={24} strokeWidth={2.5} />
            </Pressable>
          </View>

          <View style={styles.list}>
            {tasks.map((task) => (
              <Pressable
                key={task.id}
                onPress={() => toggleTask(task.id)}
                style={({ pressed }) => [
                  styles.taskItem,
                  task.done && styles.taskItemDone,
                  pressed && styles.pressed,
                ]}
              >
                <View style={[styles.checkBox, task.done && styles.checkBoxDone]}>
                  {task.done ? <Check color="#ffffff" size={16} strokeWidth={3} /> : null}
                </View>
                <Text style={[styles.taskTitle, task.done && styles.taskTitleDone]}>
                  {task.title}
                </Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#f7f3ff',
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    paddingBottom: 32,
    paddingHorizontal: 20,
    paddingTop: 18,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  backButton: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#e8dcf7',
    borderRadius: 8,
    borderWidth: 1,
    height: 48,
    justifyContent: 'center',
    marginRight: 12,
    width: 48,
  },
  pressed: {
    opacity: 0.78,
  },
  headerText: {
    flex: 1,
  },
  eyebrow: {
    color: '#827497',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0,
  },
  title: {
    color: '#3f315f',
    fontFamily: Platform.select({
      ios: 'AvenirNext-DemiBold',
      android: 'sans-serif',
      default: 'sans-serif',
    }),
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: 0,
    marginTop: 2,
  },
  hero: {
    alignItems: 'center',
    backgroundColor: '#9bb7ff',
    borderRadius: 8,
    flexDirection: 'row',
    marginBottom: 18,
    minHeight: 86,
    padding: 16,
  },
  heroText: {
    color: '#ffffff',
    flex: 1,
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0,
    lineHeight: 21,
    marginLeft: 12,
  },
  taskInputRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 14,
  },
  taskInput: {
    backgroundColor: '#ffffff',
    borderColor: '#e8dcf7',
    borderRadius: 8,
    borderWidth: 1,
    color: '#403456',
    flex: 1,
    fontSize: 16,
    height: 52,
    paddingHorizontal: 14,
  },
  addButton: {
    alignItems: 'center',
    backgroundColor: '#9bb7ff',
    borderRadius: 8,
    height: 52,
    justifyContent: 'center',
    width: 52,
  },
  list: {
    gap: 10,
  },
  taskItem: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#eadff7',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    minHeight: 56,
    paddingHorizontal: 14,
  },
  taskItemDone: {
    backgroundColor: '#f1fbf5',
    borderColor: '#ccead8',
  },
  checkBox: {
    alignItems: 'center',
    borderColor: '#bdb1cc',
    borderRadius: 6,
    borderWidth: 2,
    height: 24,
    justifyContent: 'center',
    marginRight: 12,
    width: 24,
  },
  checkBoxDone: {
    backgroundColor: '#9ad6b2',
    borderColor: '#9ad6b2',
  },
  taskTitle: {
    color: '#403456',
    flex: 1,
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0,
  },
  taskTitleDone: {
    color: '#7b887d',
    textDecorationLine: 'line-through',
  },
});
