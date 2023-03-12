
<script setup>
import { ref } from "vue";
//props for pass data
let props = defineProps({
  img: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
    required: false,
  },
  serialCode: {
    type: Number,
    required: true,
  },
});
//divide price by "," for pure price
let price = props.price.split(",").join("");
//Discount calculation
const discountedPrice = ref(
  Number(Number(price) - Number(price) * (props.discount / 100))
    .toLocaleString()
    .split(",")
    .join(",")
);
</script>
<template>
  <!-- ===== product card ===== -->
  <div class="productCard">
    <!-- ===== product card image ===== -->
    <v-img
      class="productImg"
      width="80%"
      :src="img"
      @click="navigateTo('/product')"
    ></v-img>
    <!-- ===== product card serial code =====-->
    <span class="productSerial"> کد {{ props.serialCode }}</span>

    <!-- ===== product card title =====-->
    <p class="productTitle">{{ props.text }}</p>
    <!-- ===== product card information =====-->
    <div class="productInfo">
      <v-icon class="likeIcon" icon="fi fi-rr-heart " />
      <div class="productPrice">
        <div class="productCost">
          <span class="currency">تومان</span>
          <div class="costPrice" v-if="props.discount">
            <span>{{ discountedPrice }}</span>
            <div class="discount">{{ props.discount }}%</div>
          </div>
        </div>

        <!-- ===== product card serial price ===== -->
        <span class="price">{{ props.price }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../public/assets/scss/components/productCard.scss";
</style>