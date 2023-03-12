<script setup>
import { ref } from "vue";
let isMount = ref(false);
let toggleBtn = ref(0);
let sizeBtn = ref(0);
let count = ref(2);
//images list for gallery
const images = ref([
  "Rectangle218",
  "Rectangle218",
  "Rectangle218",
  "unsplash_SZ1DDwCPqkE-6",
  "Rectangle218",
]);
//increase and decrease for counter
function increment() {
  count.value++;
}
function decrement() {
  if (count.value == 0) return;
  count.value--;
}
onMounted(() => {
  isMount.value = true;
});
</script>
<template>
  <div class="productDetail mt-6" v-if="isMount">
    <v-row>
      <!-- ===== gallery section ===== -->
      <v-col cols="12" md="5">
        <v-card width="100%" class="productImage" elevation="0">
          <div class="availableProduct true">موجود</div>
          <v-img
            width="100%"
            style="max-width: 900px"
            :src="`/assets/images/${images[toggleBtn]}.png`"
          />
          <v-col cols="12" class="d-flex mt-n8 pb-6">
            <v-btn-toggle
              v-model="toggleBtn"
              style="height: 100%"
              class="overflow-auto productImageSlider"
            >
              <v-btn
                color="#4A95E3"
                variant="text"
                class="rounded-10px pa-0"
                height="100%"
                v-for="image in images"
                :key="image.length"
              >
                <v-avatar
                  rounded="0"
                  :image="`/assets/images/${image}.png`"
                  size="100"
                >
                </v-avatar>
              </v-btn>
            </v-btn-toggle>
          </v-col>
        </v-card>
      </v-col>
      <v-col cols="12" md="7">
        <v-card width="100%" class="productImage pa-12 pt-14" elevation="0">
          <!-- ===== intro product ===== -->
          <v-row>
            <v-col cols="12" lg="8">
              <div class="serial">کد 12330</div>
              <div class="productName main my-3">دستکش معاينه نيتريل</div>
              <div class="productDesc">
                ساخته شده از پلیمر سه گانه مصنوعی بسیار مقاوم و قابل انعطاف
              </div>
            </v-col>
            <v-col
              cols="12"
              lg="4"
              class="d-flex flex-column justify-start align-end"
            >
              <v-btn
                color="#F5F5F5"
                class="rounded-10px pa-2 px-3"
                width="fit-content"
                style="font-size: 11px; font-weight: 700"
              >
                PHOENIX
                <v-avatar
                  rounded="0"
                  class="mr-4"
                  image="https://seeklogo.com/images/F/france-flag-logo-DBC61B59A7-seeklogo.com.png"
                  size="15"
                >
                </v-avatar>
              </v-btn>
              <div class="d-flex mt-2">
                <v-btn
                  color="#F5F5F5"
                  class="rounded-10px pa-2 ml-1"
                  size="small"
                  icon
                >
                  <v-icon color="#FF4A4A" size="15" icon="fi fi-rr-heart" />
                </v-btn>
                <v-menu class="shareList">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      color="#F5F5F5"
                      size="small"
                      class="rounded-10px pa-2 mr-1"
                      icon="fi fi-rr-share"
                      v-bind="props"
                    >
                      <v-icon size="15" icon="fi fi-rr-share" />
                    </v-btn>
                  </template>
                  <v-list link color="#98C6F578" width="180" class="mt-4">
                    <v-list-item link color="#98C6F578">
                      <v-list-item-title
                        class="d-flex justify-space-between align-center"
                        ><v-icon icon="fi fi-rr-duplicate" /> کپی لینک
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item link color="#98C6F578">
                      <v-list-item-title
                        class="d-flex justify-space-between align-center"
                        ><v-icon icon="fi fi-brands-whatsapp" />
                        واتساپ</v-list-item-title
                      >
                    </v-list-item>
                    <v-list-item link color="#98C6F578">
                      <v-list-item-title
                        class="d-flex justify-space-between align-center"
                        ><v-icon icon="fi fi-brands-telegram" />
                        تلگرام</v-list-item-title
                      >
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </v-col>
          </v-row>
          <v-col cols="12" class="pa-0 mt-10">
            <ul class="productInfo">
              <li class="infoList">
                <div class="fixedList">ویژگی:</div>
                <v-row style="width: 100% !important">
                  <v-col cols="12" md="6" class="mr-md-0 mr-14">
                    <li class="option">پلیمر سه گانه مصنوعی</li>
                    <li class="option">بسیار مقاوم و قابل انعطاف</li>
                    <li class="option">قابل استفاده در آزمایشگاه ها</li>
                  </v-col>
                  <v-col cols="12" md="6" class="pa-md-3 pa-0 mr-md-0 mr-12">
                    <li class="option noDisc">
                      <v-icon
                        icon="fi fi-rr-truck-side"
                        color="#4A95E3"
                        class="ml-2"
                      />
                      ارسال فوری به سراسر ایران
                    </li>
                    <li class="option noDisc">
                      <v-icon
                        icon="fi fi-rr-comment-check"
                        color="#4A95E3"
                        class="ml-2"
                      />
                      گارانتی اصالت و سلامت فیزیکی کالا
                    </li>
                  </v-col>
                </v-row>
              </li>
              <li
                class="infoList d-flex justify-center align-center my-6 mb-10"
              >
                <v-row>
                  <v-col cols="12" md="6">
                    <v-col
                      cols="12"
                      class="d-flex justify-start align-center pa-0"
                    >
                      <div class="fixedList">سایز:</div>
                      <v-btn-toggle
                        v-model="sizeBtn"
                        class="mr-6"
                        style="
                          height: fit-content;
                          justify-content: flex-start !important;
                        "
                      >
                        <v-btn
                          color="#4A95E3"
                          :theme="sizeBtn == 0 ? 'dark' : 'light'"
                          class="pa-3 px-7 mx-1 sizeBtn"
                          style="border-radius: 5px !important"
                          width="60"
                          height="40"
                          >کوچک</v-btn
                        >
                        <v-btn
                          color="#4A95E3"
                          :theme="sizeBtn == 1 ? 'dark' : 'light'"
                          class="pa-3 px-7 mx-1 sizeBtn"
                          style="border-radius: 5px !important"
                          width="60"
                          height="40"
                          >بزرگ</v-btn
                        >
                      </v-btn-toggle>
                    </v-col>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-col
                      cols="12"
                      class="d-flex justify-md-center align-center pa-0"
                    >
                      <div class="fixedList">تعداد:</div>
                      <div class="productCounter mr-md-0 mr-6">
                        <input
                          type="number"
                          v-model="count"
                          class="productCounter mt-4"
                        />
                        <div class="d-flex flex-column ml-2 icons">
                          <v-icon
                            color="#374957"
                            size="15"
                            @click="increment"
                            icon="fi fi-br-angle-small-up"
                          ></v-icon>
                          <v-icon
                            color="#374957"
                            @click="decrement"
                            size="15"
                            icon="fi fi-br-angle-small-down"
                          ></v-icon>
                        </div>
                      </div>
                    </v-col>
                  </v-col>
                </v-row>
              </li>
              <li class="infoList">
                <div class="fixedList">مشخصات:</div>
                <v-col cols="12" class="detail py-0 mr-4 px-6 pl-16">
                  <p class="pl-6">
                    دستکش نخی با روکش نیتریل بافته شده از پارچه کشبافت پلی_استر
                    سایز خیلی بزرگ XL پوشش کشبافت بدون درز و فشرده دارای پوشش
                    لاتکس سبک و مقاوم نرم، انعطاف پذیر، راحتی دست حین کار و عدم
                    احساس خستگی طراحی شده برای کار در فضاهای باز در زمستان دارای
                    مقاومت بالا و ویژگی ضد لغزش بودن دستکش در دست مناسب برای
                    ساخت و ساز ، انبارداری ، صنعت فلزات و شیشه ای ، مونتاژ خودرو
                    ، جابجایی وسایل تیز و برنده ، جابجایی شیشه
                  </p>
                </v-col>
              </li>
            </ul>
          </v-col>
          <v-col
            cols="12"
            class="pa-0 mt-12 d-flex justify-space-between align-center flex-wrap"
          >
            <div class="d-flex mb-4">
              <v-btn
                color="#F7C737"
                class="pa-7 px-6 ml-1 primaryBtn"
                style="border-radius: 10px !important"
              >
                <v-icon
                  icon="fi fi-rr-shield-interrogation"
                  class="ml-2"
                />درخواست استعلام
              </v-btn>
              <v-btn
                color="#4A95E3"
                style="border-radius: 10px !important"
                class="pa-7 px-6 mr-1 primaryBtn"
                rounded
                theme="dark"
                ><v-icon icon="fi fi-brands-whatsapp" class="ml-2" />ارتباط با
                پشتیبانی
              </v-btn>
            </div>
            <div
              class="mainTitle my-lg-0 mt-8"
              style="font-size: 16px !important"
            >
              استعلام قیمت با ثبت درخواست
            </div>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>


<style>
</style>