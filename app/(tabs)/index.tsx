import {
  FlatList,
  Image,
  Platform,
  RefreshControl,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import TaskInput from "@/components/TaskInput";
import TaskList from "@/components/TaskList";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";

export default function HomeScreen() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<{ id: string; title: string }[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [isEditing, setIsEditing] = useState<string | null>(null);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const handleDelete = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (item: { id: string; title: string }) => {
    setTask(item.title);
    setIsEditing(item.id);
  };

  const handleSaveTask = () => {
    if (!task.trim()) return;
    if (isEditing) {
      setTasks(
        tasks.map((t) => (t.id === isEditing ? { ...t, title: task } : t)),
      );
      setIsEditing(null);
    } else {
      setTasks([...tasks, { id: Date.now().toString(), title: task }]);
    }
    setTask("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
      <TaskInput
        task={task}
        setTask={setTask}
        handleSaveTask={handleSaveTask}
        isEditing={isEditing}
      />
      <TaskList
        tasks={tasks}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 6,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 6,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  taskList: {
    gap: 10,
  },
  taskContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  taskId: {
    fontSize: 16,
    fontWeight: "bold",
  },
  task: {
    fontSize: 16,
    flex: 1,
    paddingLeft: 10,
  },
  editButton: {
    backgroundColor: "#007bff",
    padding: 5,
    borderRadius: 4,
  },
  editButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: "#dc3545",
    padding: 5,
    borderRadius: 4,
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
