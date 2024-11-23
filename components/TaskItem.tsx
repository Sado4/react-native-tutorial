import type React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Task {
  id: string;
  title: string;
}

interface TaskItemProps {
  item: Task;
  handleEdit: (item: Task) => void;
  handleDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  item,
  handleEdit,
  handleDelete,
}) => {
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.taskId}>{item.id}</Text>
      <Text style={styles.task}>{item.title}</Text>
      <TouchableOpacity
        onPress={() => handleEdit(item)}
        style={styles.editButton}
      >
        <Text style={styles.editButtonText}>編集</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleDelete(item.id)}
        style={styles.deleteButton}
      >
        <Text style={styles.deleteButtonText}>削除</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default TaskItem;
