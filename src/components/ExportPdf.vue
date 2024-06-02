<template>
   <CustomButton btn-type="primary" @click="exportPdf" style="margin-bottom: 10px"> Export resume as pdf </CustomButton>
</template>

<script setup lang="ts">
import CustomButton from "./CustomButton.vue";
// @ts-ignore
import html2pdf from "html2pdf.js";

type Props = {
   resumeFormat: string;
};

const props = defineProps<Props>();

const exportPdf = () => {
   const unit = props.resumeFormat == "a4" ? "mm" : "in";

   const pdfConfig = {
      margin: 0,
      filename: "resume",
      jsPDF: {
         unit: unit,
         format: props.resumeFormat,
         orientation: "portrait",
      },
   };

   const resume = document.getElementById("resume");
   html2pdf().set(pdfConfig).from(resume).save();
};
</script>
