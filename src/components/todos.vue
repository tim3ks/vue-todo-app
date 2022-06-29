<script setup>
const props = defineProps({
  todos: {
    type: Array,
  },
});

const emit = defineEmits(["isDone", "del"]);

const isDone = (index) => emit("isDone", index);
const del = (index) => emit("del", index);
</script>

<template>
  <div>
    <ul
      v-for="(todo, index) in props.todos"
      :key="props.todos.index"
      class="cursor-pointer justify-between"
    >
      <li
        class="flex justify-between py-1 px-3 hover:bg-slate-50 hover:bg-opacity-10 rounded"
      >
        <span
          @click="isDone(index)"
          class="text-white"
          :class="{
            'line-through decoration-red-500 decoration-4 px-3':
              props.todos[index].isDone,
          }"
          >{{ todo.name }}</span
        >
        <button
          @click="del(index)"
          class="flex border px-2 rounded hover:border-red-500 hover:text-red-500 items-center text-xs"
        >
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
