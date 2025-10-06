import AsyncStorage from "@react-native-async-storage/async-storage";

export type Todo = {
  isCompleted: boolean;
  task: string;
};

const STORAGE_KEY = "todos";

/** ✅ CREATE / ADD a new todo */
export const addTodo = async (newTodo: Todo): Promise<void> => {
  try {
    const existing = await AsyncStorage.getItem(STORAGE_KEY);
    const todos: Todo[] = existing ? JSON.parse(existing) : [];
    todos.push(newTodo);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (e) {
    console.error("Error adding todo:", e);
  }
};

/** ✅ READ / GET all todos */
export const getTodos = async (): Promise<Todo[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error("Error reading todos:", e);
    return [];
  }
};

/** ✅ UPDATE a todo */
export const updateTodo = async (index: number, updatedTodo: Todo): Promise<void> => {
  try {
    const todos = await getTodos();
    if (index >= 0 && index < todos.length) {
      todos[index] = updatedTodo;
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
  } catch (e) {
    console.error("Error updating todo:", e);
  }
};

/** ✅ DELETE a todo by index */
export const deleteTodo = async (index: number): Promise<void> => {
  try {
    const todos = await getTodos();
    const updatedTodos = todos.filter((_, i) => i !== index);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTodos));
  } catch (e) {
    console.error("Error deleting todo:", e);
  }
};

/** ✅ CLEAR all todos */
export const clearTodos = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error("Error clearing todos:", e);
  }
};
