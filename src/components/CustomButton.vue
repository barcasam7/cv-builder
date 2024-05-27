<template>
   <button class="btn" :class="customClass">
      <slot></slot>
   </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

type Props = {
   btnType: string;
};

const props = withDefaults(defineProps<Props>(), {
   btnType: "",
});

const customClass = computed(() => {
   if (props.btnType) {
      return "btn-" + props.btnType;
   }
});
</script>

<style scoped>
.btn {
   border-radius: 4px;
   padding: 8px 10px;
   border: none;
   font-size: 16px;
   display: block;
   width: 100%;
   background-color: #82c0cc;
}

.btn:hover {
   background-color: #73aab5;
   cursor: pointer;
}

.btn-primary {
   background-color: var(--color-black);
   color: white;
}

.btn-primary:hover {
   background-color: var(--color-black);
}

.btn-secondary {
   background-color: #3943b7;
   color: white;
}

.btn-secondary:hover {
   background-color: #30399e;
}
</style>
