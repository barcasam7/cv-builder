<template>
   <label>
      <select class="custom-input" @change="$emit('updateSelection', ($event.target as HTMLSelectElement).value)">
         <option v-for="option in options" :value="option.value" :selected="defaultOption == option.value" :key="option.value">
            {{ option.name }}
         </option>
      </select>
      {{ label }}
   </label>
</template>

<script setup lang="ts">
type Props = {
   label: string;
   options: { name: string; value: string }[];
   defaultOption: string;
};

defineProps<Props>();
</script>

<style scoped>
label {
   display: flex;
   align-items: center;
}

select {
   display: inline-block;
   min-width: 80px;
   margin-right: 8px;
}
</style>
