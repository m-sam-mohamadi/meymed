<script setup>
import "../../public/assets/scss/components/productPage.scss";
import navigation from "../navigation.vue";
import mFooter from "../footer.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import productDetails from "./productDetails.vue";
import productGallery from "./productGallery.vue";
import { ref } from "vue";
const products = await $fetch("/api/products");
const myCarousel = ref(null);
const breakpoint1 = ref({
  500: {
    itemsToShow: 2,
  },
  700: {
    itemsToShow: 3,
    snapAlign: "center",
  },
  1024: {
    itemsToShow: 4,
  },
  2024: {
    itemsToShow: 4,
  },
});
</script>
<template>
  <v-col
    cols="12"
    md="11"
    class="pa-md-0 px-6 ma-auto position-relative productPage"
  >
    <navigation />
    <v-breadcrumbs
      bg-color="info"
      :items="['خانه', 'محصولات', 'اتاق عمل']"
      bgColor="white"
      class="primaryBtn justify-start mt-6"
    ></v-breadcrumbs>
    <productGallery />
    <productDetails />
    <v-col cols="12">
      <h3 class="mainTitle text-center mt-16">محصولات مرتبط</h3>
      <div class="sliderPaging" v-if="myCarousel">
        <button class="nextBtn" @click="myCarousel.data.next">
          <v-icon icon="fi fi-rr-arrow-small-right" />
        </button>
        <button class="prevBtn" @click="myCarousel.data.prev">
          <v-icon icon="fi fi-rr-arrow-small-left" />
        </button>
      </div>
      <!-- <client-only> -->
      <v-col cols="12">
        <carousel
          class="mt-16 pa-0"
          :itemsToShow="6"
          :wrap-around="true"
          snapAlign="right"
          ref="myCarousel"
          :breakpoints="breakpoint1"
          :items-to-scroll="1"
          v-if="products"
        >
          <slide
            v-for="data in products.data"
            :key="data.length"
            class="mx-md-0 mx-2"
          >
            <productCard
              :key="data.length"
              :text="data.title"
              :price="data.price.toLocaleString().split(',').join(',')"
              :discount="data.hasDiscount ? data.discount : null"
              :img="data.img"
              :serial-code="data.serialCode"
              link="#"
            />
          </slide>
        </carousel>
      </v-col>
    </v-col>
    <mFooter />
  </v-col>
</template>
 
