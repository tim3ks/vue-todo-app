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
      <button @click="cancelTodo" class="hover:text-orange-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
          />
        </svg>
      </button>
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
