<script setup>
import { ref } from "vue";
import productCard from "../productCard.vue";
let toggleBtn = ref(0);

const products = await $fetch("/api/products");
console.log(products);
</script>

<template>
  <v-col cols="12" class="ma-auto mt-15 mb-10">
    <div class="category">
      <v-col lg="9" md="10" cols="12" class="pa-0 ma-auto">
        <div class="categoryController">
          <v-btn-toggle v-model="toggleBtn">
            <v-btn color="#4A95E3" variant="text"> دستگاه های پزشکی </v-btn>

            <v-btn color="#4A95E3" variant="text"> تجهیزات اتاق عمل</v-btn>

            <v-btn color="#4A95E3" variant="text"> روپوش های پزشکی</v-btn>

            <v-btn color="#4A95E3" variant="text"> تخت های بیمارستانی</v-btn>
            <v-btn color="#4A95E3" variant="text"> ابزار پزشکی</v-btn>
          </v-btn-toggle>
        </div>
      </v-col>
      <v-col cols="12" class="mt-15">
        <transition-group name="fade" mode="out-in">
          <div class="products" v-if="toggleBtn == 0">
            <productCard
              v-for="data in products.data"
              :key="data.length"
              :text="data.title"
              :price="data.price.toLocaleString().split(',').join(',')"
              :discount="data.hasDiscount ? data.discount : null"
              :img="data.img"
              :serial-code="data.serialCode"
              link="#"
            />
          </div>
          <div class="products" v-if="toggleBtn == 1">
            <productCard
              v-for="data in products.data"
              :key="data.length"
              :text="data.title"
              :price="data.price.toLocaleString().split(',').join(',')"
              :discount="data.hasDiscount ? data.discount : null"
              :img="data.img"
              :serial-code="data.serialCode"
              link="#"
            />
          </div>
          <div class="products" v-if="toggleBtn == 2">
            <productCard
              v-for="data in products.data"
              :key="data.length"
              :text="data.title"
              :price="data.price.toLocaleString().split(',').join(',')"
              :discount="data.hasDiscount ? data.discount : null"
              :img="data.img"
              :serial-code="data.serialCode"
              link="#"
            />
          </div>
          <div class="products" v-if="toggleBtn == 3">
            <productCard
              v-for="data in products.data"
              :key="data.length"
              :text="data.title"
              :price="data.price.toLocaleString().split(',').join(',')"
              :discount="data.hasDiscount ? data.discount : null"
              :img="data.img"
              :serial-code="data.serialCode"
              link="#"
            />
          </div>
          <div class="products" v-if="toggleBtn == 4">
            <productCard
              v-for="data in products.data"
              :key="data.length"
              :text="data.title"
              :price="data.price.toLocaleString().split(',').join(',')"
              :discount="data.hasDiscount ? data.discount : null"
              :img="data.img"
              :serial-code="data.serialCode"
              link="#"
            />
          </div>
        </transition-group>
      </v-col>
    </div>
  </v-col>
</template>


<style lang="scss">
@import "../../public/assets/scss/components/category.scss";
</style>