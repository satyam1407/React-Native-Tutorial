// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'


// export default function index() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Todoapp</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     text: {
//         fontSize: 20
//     }
// })
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from "react-native";
import { addTodo, getTodos, deleteTodo, updateTodo, Todo } from "../../todoApp_utils/todostorage";

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  const handleAdd = async () => {
    if (!task.trim()) return;
    const newTodo: Todo = { isCompleted: false, task };
    await addTodo(newTodo);
    const updated = await getTodos();
    setTodos(updated);
    setTask("");
  };

  const handleToggle = async (index: number) => {
    const updatedTodo = { ...todos[index], isCompleted: !todos[index].isCompleted };
    await updateTodo(index, updatedTodo);
    const updated = await getTodos();
    setTodos(updated);
  };

  const handleDelete = async (index: number) => {
    await deleteTodo(index);
    const updated = await getTodos();
    setTodos(updated);
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Enter task"
        value={task}
        onChangeText={setTask}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <Button title="Add Task" onPress={handleAdd} />

      <FlatList
        data={todos}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handleToggle(index)}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 8,
              }}
            >
              <Text style={{ textDecorationLine: item.isCompleted ? "line-through" : "none" }}>
                {item.task}
              </Text>
              <Button title="❌" onPress={() => handleDelete(index)} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
