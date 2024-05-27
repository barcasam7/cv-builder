<template>
   <label>
      <input type="number" class="custom-input" :min="min" :max="max" :value="currentValue" @change="$emit('percentageChanged', ($event.target as HTMLInputElement).value)" />
      % {{ label }}
   </label>
</template>

<script setup lang="ts">
type Props = {
   label: string;
   min: number;
   max: number;
   currentValue: number;
};

withDefaults(defineProps<Props>(), {
   min: 0,
   max: 100,
   currentValue: 0,
});
</script>

<style scoped>
label {
   display: flex;
   align-items: center;
}

input {
   width: 50px;
   margin-right: 8px;
   display: block;
}
</style>
