<script setup>
const emit = defineEmits(["newTodo"]);
</script>

<template>
  <button
    @click="emit('newTodo')"
    class="flex border px-2 py-1 text-xs rounded mb-1 hover:border-green-500 hover:text-green-400 items-center"
  >
    +
  </button>
</template>

<style scoped></style>
