import { reactive, watchEffect } from "vue";

const local = JSON.parse(localStorage.getItem("todos"));

const state = reactive({
  todos: [],
  isStorage: false,
  isAddTodo: false,
});

const storage = () => {
  localStorage.setItem("todos", JSON.stringify(state.todos));
  state.isStorage = true;
};

const checkStorage = () => {
  local
    ? (state.todos = local) && (state.isStorage = true)
    : (state.todos = []);
};

const newTodo = () => (state.isAddTodo = true);

const cancelTodo = () => (state.isAddTodo = false);

const addTodo = (e) => {
  if (e.length == 0) return;
  const item = { name: e, isDone: false };

  state.todos.push(item);

  state.isStorage
    ? localStorage.setItem("todos", JSON.stringify(state.todos))
    : null;
  state.isAddTodo = false;
};

watchEffect(async () => {
  if (state.todos.length) {
    await updateLocalStorage();
  }
});

const isDone = async (i) => {
  state.todos[i].isDone = !state.todos[i].isDone;
};

const del = async (i) => {
  state.todos.splice(i, 1);
};

const updateLocalStorage = async () => {
  const todos = JSON.stringify(state.todos);
  state.isStorage ? localStorage.setItem("todos", todos) : null;
};

export default {
  state: state,
  local: local,
  newTodo: newTodo,
  cancelTodo: cancelTodo,
  addTodo: addTodo,
  checkStorage: checkStorage,
  isDone: isDone,
  del: del,
  storage: storage,
};
