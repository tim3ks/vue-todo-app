import { reactive, watchEffect, ref } from "vue";

const local = JSON.parse(localStorage.getItem("todos"));

const state = reactive({
  todos: [],
  isStorage: false,
  isAddTodo: false,
});

const storage = () => {
  const storage = localStorage.getItem("todos");
  if (storage) {
    localStorage.removeItem("todos");
    state.isStorage = false;
  } else {
    localStorage.setItem("todos", JSON.stringify(state.todos));
    state.isStorage = true;
  }
};

const checkStorage = () => {
  local
    ? (state.todos = local) && (state.isStorage = true)
    : (state.todos = []);
};

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
    const todos = JSON.stringify(state.todos);
    localStorage.setItem("todos", todos);
  }
});

const isDone = (i) => {
  state.todos[i].isDone = !state.todos[i].isDone;
};

const del = (i) => {
  state.todos.splice(i, 1);
};
export default {
  state,
  local: local,
  addTodo,
  checkStorage,
  isDone,
  del,
  storage,
};
