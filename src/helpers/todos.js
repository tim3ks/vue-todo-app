import { reactive, readonly } from "vue";

const state = reactive({
  fnacResults: ["aaaa", "bbb"],
  interResults: ["ccc"],
});

export default { state: state };
