<script setup>
import { inject, toRefs } from "vue";
import useStorage from "@/components/inputs/useStorage.vue";
import btnAddTodo from "@/components/buttons/btnAddTodo.vue";
import addTodoComponent from "@/components/addTodo.vue";
import todosComponent from "@/components/todos.vue";

const { state, addTodo, checkStorage, isDone, del, storage } = inject("store");

created: {
  checkStorage();
}
</script>

<template>
  <div class="flex h-screen flex-col">
    <div class="mx-auto h-full w-2/3 flex-1 flex items-center p-4 text-lg">
      <div class="w-full">
        <Transition name="fade">
          <addTodoComponent
            v-if="state.isAddTodo"
            @addTodo="addTodo"
            @cancelTodo="state.isAddTodo = !state.isAddTodo"
          />
          <div v-else>
            <div class="flex justify-between">
              <btnAddTodo @newTodo="state.isAddTodo = !state.isAddTodo">
              </btnAddTodo>
              <div class="flex items-center gap-x-2">
                <span class="text-sm"
                  >{{
                    state.isStorage
                      ? "Remove localStorage!"
                      : "Use localStorage?"
                  }}
                </span>
                <!-- <input type="checkbox" v-model="isStorage" /> -->
                <useStorage @useStorage="storage" :storage="state" />
              </div>
            </div>

            <div
              v-if="state.todos.length > 0"
              class="flex flex-col p-6 border border-indigo-300 rounded"
            >
              <h1 class="text-2xl mb-10 text-center underline">
                Your Daily Todos
              </h1>
              <todosComponent
                :todos="state.todos"
                @isDone="isDone"
                @del="del"
              />
            </div>
            <div
              v-else
              class="flex flex-col p-6 border border-indigo-400 rounded"
            >
              <h1 class="text-2xl mb-10 text-center">
                Please Add some Todos :)
              </h1>
            </div>
          </div>
        </Transition>
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
/* .green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
} */

.fade-enter-from {
  /* position: absolute; */
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.2s ease;
}

/* .fade-enter-to {
  position: absolute;
} */
.fade-leave-from {
  position: absolute;
}

.fade-leave-to {
  position: absolute;
  opacity: 0;
}

.fade-leave-active {
  position: absolute;
  transition: all 0.2s ease;
}
</style>
