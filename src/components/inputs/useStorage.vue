<script setup>
const emit = defineEmits(["useStorage"]);

const check = () => {
  emit("useStorage");
};
</script>

<template>
  <div>
    <input type="checkbox" name="" @change="check" />
  </div>
</template>

<style scoped></style>
