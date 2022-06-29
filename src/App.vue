<script setup>
import { ref, onMounted, reactive, inject, watchEffect } from "vue";
import useStorage from "@/components/inputs/useStorage.vue";
import btnAddTodo from "@/components/buttons/btnAddTodo.vue";
import addTodoComponent from "@/components/addTodo.vue";
import todosComponent from "@/components/todos.vue";

const {
  state,
  newTodo,
  addTodo,
  checkStorage,
  isDone,
  del,
  cancelTodo,
  storage,
} = inject("store");

created: {
  checkStorage();
}
</script>

<template>
  <div class="flex h-screen flex-col">
    <div class="mx-auto h-full w-2/3 flex-1 flex items-center p-4 text-lg">
      <div class="w-full">
        <div v-if="!state.isAddTodo">
          <div class="flex justify-between">
            <btnAddTodo @newTodo="newTodo"> </btnAddTodo>
            <div class="flex items-center gap-x-2" v-if="!state.isStorage">
              <span class="text-sm">Use localStorage?: </span>
              <useStorage @useStorage="storage" />
            </div>
          </div>
          <div
            v-if="state.todos.length > 0"
            class="flex flex-col p-6 border border-indigo-400 rounded"
          >
            <h1 class="text-2xl mb-10 text-center">Your daily Todos</h1>
            <todosComponent :todos="state.todos" @isDone="isDone" @del="del" />
          </div>
          <div
            v-else
            class="flex flex-col p-6 border border-indigo-400 rounded"
          >
            <h1 class="text-2xl mb-10 text-center">Please Add some Todos :)</h1>
          </div>
        </div>
        <addTodoComponent v-else @addTodo="addTodo" @cancelTodo="cancelTodo" />
      </div>
    </div>
  </div>
</template>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}
</style>
