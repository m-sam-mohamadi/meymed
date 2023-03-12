 
<template>
  <!-- ===== navigation parent ===== -->
  <v-col cols="12" class="pa-0 pt-2 navigation">
    <v-col
      cols="12"
      class="pa-0 justify-space-between align-center d-none d-md-flex"
    >
      <logo class="ml-8" />
      <!-- ===== navigation search bar ===== -->
      <v-text-field
        class="primaryInput mt-5 mx-1"
        placeholder="نام محصول یا برند مورد نظر خود را وارد نمایید"
        append-inner-icon="fi fi-rr-search"
        variant="solo"
      ></v-text-field>

      <!-- ===== navigation option buttons ===== -->
      <div class="align-center d-none d-md-flex">
        <v-badge
          :content="1"
          color="#F7C737"
          class="d-none d-md-flex"
          theme="light"
        >
          <v-btn class="primaryBtn mx-1 py-7 px-4" color="white">
            <div class="d-flex">
              سبد درخواست
              <v-icon class="ma-auto mr-2" icon="fi fi-rr-shopping-cart" />
            </div>
          </v-btn>
        </v-badge>
        <v-btn
          class="primaryBtn mx-1 py-7 px-6 d-none d-md-flex"
          color="#F7C737"
        >
          <div class="d-flex">
            <div class="d-flex flex-column text-left justify-end ml-3">
              <span style="font-size: small">021</span>
              <div style="font-weight: 700">91014919</div>
            </div>
            <v-icon class="ma-auto" icon="fi fi-rr-call-history" />
          </div>
        </v-btn>
        <v-btn class="primaryBtn mx-1 py-7 px-4" color="#4A95E3 " theme="dark">
          ورود <v-divider class="mx-3" vertical /> ثبت نام
        </v-btn>
      </div>
    </v-col>
    <!-- ===== navigation responsive section ===== -->
    <v-col
      cols="12"
      class="pa-0 justify-space-between align-center d-md-none d-flex flex-column"
    >
      <div
        class="d-flex align-center justify-space-between"
        style="width: 100%"
      >
        <logo class="mr-4" />
        <v-btn class="primaryBtn mx-1 py-7 px-4" color="#4A95E3 " theme="dark">
          ورود <v-divider class="mx-3" vertical /> ثبت نام
        </v-btn>
      </div>
      <v-col cols="12" class="pa-0">
        <v-text-field
          class="primaryInput mt-5 mx-1"
          placeholder="نام محصول یا برند مورد نظر خود را وارد نمایید"
          append-inner-icon="fi fi-rr-search"
          variant="solo"
        ></v-text-field>
      </v-col>
    </v-col>
    <v-col cols="12" class="pa-0 px-1">
      <!-- ===== navigate to pages ===== -->
      <v-card
        width="100%"
        class="d-flex justify-space-between align-center navLinks"
      >
        <div>
          <nuxt-link class="navLink" to="#1"> ابزار جراحی</nuxt-link>
        </div>
        <div>
          <nuxt-link class="navLink" to="#2">اتاق عمل</nuxt-link>
        </div>
        <div>
          <nuxt-link class="navLink" to="#2"> تجهیزات پزشکی</nuxt-link>
        </div>
        <div>
          <nuxt-link class="navLink" to="#3"> هتلینگ</nuxt-link>
        </div>
        <div>
          <nuxt-link class="navLink" to="#4"> تخصصی</nuxt-link>
        </div>
        <div>
          <nuxt-link class="navLink" to="#5"> فیزیوتراپی و توانبخشی</nuxt-link>
        </div>
        <div>
          <nuxt-link class="navLink" to="#6"> تصویربرداری</nuxt-link>
        </div>
        <div>
          <nuxt-link class="navLink" to="#7"> استیریلازیون و لندری</nuxt-link>
        </div>
        <div>
          <nuxt-link class="navLink" to="#8">
            لوازم مصرفی پزشکی و بیمارستانی</nuxt-link
          >
        </div>
        <div>
          <nuxt-link class="navLink" to="#9"> تجهیزات آزمایشگاهی</nuxt-link>
        </div>
      </v-card>
    </v-col>
  </v-col>
</template>

 