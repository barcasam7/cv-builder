<template>
   <label>
      <input type="color" class="color-picker" @input="$emit('colorChanged', ($event.target as HTMLInputElement).value)" :value="defaultColor" />
      {{ label }}
   </label>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

defineEmits(["colorChanged"]);
type Props = {
   label: string;
   defaultColor: string | null;
};

withDefaults(defineProps<Props>(), {
   label: "Choose a color",
});
</script>

<style scoped>
label {
   display: flex;
   align-items: center;
}

.color-picker {
   margin-right: 10px;
   width: 26px;
   height: 30px;
   padding: 0;
   border: none;
   background: transparent;
}
</style>
