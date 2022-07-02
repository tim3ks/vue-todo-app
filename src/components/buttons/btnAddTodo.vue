<script setup>
const emit = defineEmits(["newTodo"]);
</script>

<template>
  <button
    @click="emit('newTodo')"
    class="flex border px-2 py-1 text-xs rounded mb-1 hover:border-green-500 hover:text-green-400 items-center transition-all duration-300"
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
        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </button>
</template>

<style scoped></style>
