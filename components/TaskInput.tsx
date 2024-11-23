import type React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

interface TaskInputProps {
  task: string;
  setTask: (text: string) => void;
  handleSaveTask: () => void;
  isEditing: string | null;
}

const TaskInput: React.FC<TaskInputProps> = ({
  task,
  setTask,
  handleSaveTask,
  isEditing,
}) => {
  return (
    <>
      <TextInput
        placeholder="タスクを入力"
        style={styles.input}
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <TouchableOpacity onPress={handleSaveTask} style={styles.button}>
        <Text style={styles.buttonText}>{isEditing ? "編集" : "追加"}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
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
});

export default TaskInput;
