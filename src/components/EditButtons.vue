<template>
   <button v-if="showAddBtn" class="edit-btn edit-btn-add" @click="$emit('addClick')">
      {{ textAdd }}
   </button>
   <button v-if="showRemoveBtn" class="edit-btn edit-btn-remove" @click="$emit('removeClick')">
      {{ textRemove }}
   </button>
</template>

<script setup lang="ts">
defineEmits(["addClick", "removeClick"]);

type Props = {
   showRemoveBtn: boolean;
   showAddBtn: boolean;
   textAdd: string;
   textRemove: string;
};

withDefaults(defineProps<Props>(), {
   showRemoveBtn: true,
   showAddBtn: true,
   textAdd: "+",
   textRemove: "-",
});
</script>

<style scoped>
.edit-off .edit-btn {
   display: none;
}

.edit-btn {
   min-width: 20px;
   height: 20px;
   border-radius: 4px;
   border: none;
   background-color: transparent;
   margin-left: 8px;
}

.edit-btn-add {
   background-color: #3feee6;
   color: #000;
}

.edit-btn-add:hover {
   background-color: rgb(68, 219, 212);
}

.edit-btn-remove {
   background-color: #f97068;
   color: #fff;
}

.edit-btn-remove:hover {
   background-color: #e0635c;
}
</style>
