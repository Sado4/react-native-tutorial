import type React from "react";
import { FlatList, RefreshControl, StyleSheet, View } from "react-native";
import TaskItem from "./TaskItem";

interface Task {
  id: string;
  title: string;
}

interface TaskListProps {
  tasks: Task[];
  handleEdit: (item: Task) => void;
  handleDelete: (id: string) => void;
  refreshing: boolean;
  onRefresh: () => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  handleEdit,
  handleDelete,
  refreshing,
  onRefresh,
}) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <TaskItem
          item={item}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      )}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

export default TaskList;
