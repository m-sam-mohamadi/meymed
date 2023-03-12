
<script setup>
import navigation from "../navigation.vue";
import choosePlan from "./choosePlan.vue";
import category from "./category.vue";
import productCard from "../productCard.vue";
import countDownCard from "./countDownCard.vue";
import customers from "./customers.vue";
import mFooter from "../footer.vue";
import faq from "./faq.vue";
import { ref } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
const products = await $fetch("/api/products");
const myCarousel = ref(null);
const myCarousel2 = ref(null);
const breakpoint1 = ref({
  500: {
    itemsToShow: 2,
  },
  700: {
    itemsToShow: 3,
    snapAlign: "center",
  },
  1024: {
    itemsToShow: 3,
  },
  1500: {
    itemsToShow: 4,
  },
  2024: {
    itemsToShow: 5,
  },
  4096: {
    itemsToShow: 6,
  },
});
const breakpoint2 = ref({
  500: {
    itemsToShow: 2,
  },
  700: {
    itemsToShow: 3,
    snapAlign: "center",
  },
  1024: {
    itemsToShow: 5,
  },
  2048: {
    itemsToShow: 6,
  },
  4096: {
    itemsToShow: 6,
  },
});
</script>
 
<template>
  <v-col
    cols="12"
    md="10"
    xl="8"
    class="pa-md-0 px-6 ma-auto position-relative"
  >
    <navigation />
    <v-col cols="12" class="d-flex justify-center flex-wrap align-center pt-12">
      <v-card width="160px" height="160px" class="catCard">
        <v-img width="72px" src="/assets/images/CT Scanner.png"></v-img>
        <span>دستگاه های پزشکی</span>
      </v-card>
      <v-card width="160px" height="160px" class="catCard">
        <v-img width="72px" src="/assets/images/Catheter.png"></v-img>
        <span>تجهیزات اتاق عمل</span>
      </v-card>
      <v-card width="160px" height="160px" class="catCard">
        <v-img width="72px" src="/assets/images/Hospital Gown.png"></v-img>
        <span>روپوش های پزشکی</span>
      </v-card>
      <v-card width="160px" height="160px" class="catCard">
        <v-img width="72px" src="/assets/images/Hospital Wheel Bed.png"></v-img>
        <span>تخت های بیمارستانی</span>
      </v-card>
      <v-card width="160px" height="160px" class="catCard">
        <v-img width="72px" src="/assets/images/Stethoscope.png"></v-img>
        <span>ابزار پزشکی</span>
      </v-card>
    </v-col>
    <choosePlan />
    <category />
    <v-row class="px-md-16">
      <v-col md="6" cols="12" class="px-6">
        <v-img
          src="/assets/images/Group91.png"
          class="ma-auto"
          style="max-width: 900px"
        />
      </v-col>
      <v-col cols="12" md="6" class="px-6">
        <v-img
          src="/assets/images/Group92.png"
          class="ma-auto"
          style="max-width: 900px"
        />
      </v-col>
    </v-row>
    <h3 class="mainTitle text-center mt-16">جدیدترین محصولات</h3>
    <div class="sliderPaging" v-if="myCarousel">
      <button class="nextBtn" @click="myCarousel.data.next">
        <v-icon icon="fi fi-rr-arrow-small-right" />
      </button>
      <button class="prevBtn" @click="myCarousel.data.prev">
        <v-icon icon="fi fi-rr-arrow-small-left" />
      </button>
    </div>
    <!-- <client-only> -->
    <carousel
      class="mt-16 pa-0"
      :itemsToShow="2"
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
    <!-- </client-only> -->
    <v-col cols="12" class="mt-14 bannerSection">
      <div class="px-0 cdCard"><countDownCard /></div>
      <div class="bannerImg pr-lg-6">
        <v-img
          src="/assets/images/banner.png"
          style="max-width: 900px"
          width="100%"
          class="mr-auto"
        />
      </div>
    </v-col>
    <v-col cols="12" class="pa-0">
      <customers />
      <div class="sliderPaging" v-if="myCarousel2">
        <button class="nextBtn" @click="myCarousel2.data.next">
          <v-icon icon="fi fi-rr-arrow-small-right" />
        </button>
        <button class="prevBtn" @click="myCarousel2.data.prev">
          <v-icon icon="fi fi-rr-arrow-small-left" />
        </button>
      </div>
      <client-only>
        <carousel
          class="mt-12"
          :itemsToShow="6"
          :wrap-around="true"
          snapAlign="right"
          ref="myCarousel2"
          :items-to-scroll="1"
          :breakpoints="breakpoint2"
        >
          <slide v-for="data in 6" :key="data">
            <v-card
              width="180"
              height="180"
              class="pa-6 componyLogo"
              :key="data"
            >
              <v-img width="180" :src="`/assets/images/logo${data}.png`" />
            </v-card>
          </slide>
        </carousel>
      </client-only>
    </v-col>
    <v-col md="12" class="ma-auto mt-12 d-md-block d-none">
      <v-img height="100%" :src="`/assets/images/meymedOptions.png`" />
    </v-col>
    <v-col cols="12" class="pa-0 d-flex flex-column mt-16">
      <div class="mainTitle text-center">سوالات متداول</div>

      <faq class="mt-16" />
    </v-col>
    <m-footer />
    <v-img src="/assets/images/Ellipse.png" class="bgEllipse" />
    <v-img src="/assets/images/Rectangle.png" class="bgSquare" />
    <!-- <v-img src="/assets/images/Rectangle130.png" class="bgRect" /> -->
  </v-col>
</template>

<style lang="scss">
@import "../../public/assets/scss/components/home.scss";
</style>