<script setup>
const props = defineProps({
  todos: {
    type: Array,
  },
});

const emit = defineEmits(["isDone", "del"]);
</script>

<template>
  <div>
    <ul
      v-for="(todo, index) in props.todos"
      :key="props.todos.index"
      class="cursor-pointer justify-between list-outside list-disc"
    >
      <li
        class="flex justify-between py-1 px-3 hover:bg-slate-50 hover:bg-opacity-10 rounded transition-all duration-300"
      >
        <div
          @click="emit('isDone', index)"
          class="text-white w-full duration-300 transition-all"
          :class="{
            'line-through decoration-red-500 decoration-4 px-3 ':
              props.todos[index].isDone,
          }"
        >
          {{ todo.name }}
        </div>
        <button
          @click="emit('del', index)"
          class="flex border px-2 rounded hover:border-red-500 hover:text-red-500 items-center text-xs transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
