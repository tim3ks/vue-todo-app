<script setup>
import { onMounted } from "vue";

const emit = defineEmits(["addTodo", "cancelTodo"]);

const addTodo = (e) => {
  emit("addTodo", e.target.value);
};

const cancelTodo = () => {
  emit("cancelTodo");
};

// onMounted(() => {
//   state.todo.value.focus();
// });
</script>

<template>
  <div class="flex flex-col justify-center relative gap-2">
    <div class="flex justify-between px-2">
      <h1 class="text-slate-400">Adding Todo</h1>
      <button @click="cancelTodo" class="hover:text-orange-500">back</button>
    </div>

    <input
      type="text"
      class="h-16 border rounded focus:outline-none px-2 text-xl flex content-center focus:ring-2 focus:ring-red-400 text-slate-600"
      @keyup.enter="addTodo($event)"
      ref="todo"
    />
  </div>
</template>

<style scoped></style>
