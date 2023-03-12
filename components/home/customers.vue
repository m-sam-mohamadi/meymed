<script setup>
import { Carousel, Slide } from "vue3-carousel";
import { ref } from "vue";

const settings = ref({
  itemsToShow: 1,
  snapAlign: "center",
});
</script>
<template>
  <div class="customers mt-16">
    <div class="mainTitle text-center">برخی از مشتریان ما</div>
    <div class="blueDetail mt-4">
      تامین منافع مشتری از جمله اهداف مهم در شرکت می مد می باشد <br />و باعث
      افتخار ماست که توانسته ایم با کیفیت و توانایی های خود رضایت مشتری خود را
      جلب کنیم
    </div>
  </div>
</template>
 