<script setup="props, { emit }">
import { computed, inject, toRef } from "vue";

const { state } = inject("store");

const emit = defineEmits(["useStorage"]);

const check = () => {
  emit("useStorage");
};
</script>

<template>
  <div>
    <input type="checkbox" @change="check" name="" v-model="state.isStorage" />
  </div>
</template>

<style scoped></style>
