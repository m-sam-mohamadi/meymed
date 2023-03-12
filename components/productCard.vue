
<script setup>
import { ref } from "vue";
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
let price = props.price.split(",").join("");
const discountedPrice = ref(
  Number(Number(price) - Number(price) * (props.discount / 100))
    .toLocaleString()
    .split(",")
    .join(",")
);
</script>
<template>
  <div class="productCard">
    <v-img
      class="productImg"
      width="80%"
      :src="img"
      @click="navigateTo('/product')"
    ></v-img>
    <span class="productSerial"> کد {{ props.serialCode }}</span>

    <p class="productTitle">{{ props.text }}</p>
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

        <span class="price">{{ props.price }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../public/assets/scss/components/productCard.scss";
</style>