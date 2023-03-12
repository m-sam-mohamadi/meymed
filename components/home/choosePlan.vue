 <script setup>
import { ref } from "vue";
let toggleBtn = ref(0);
</script>
<template>
  <v-col cols="12" class="pa-1 mt-16">
    <v-row>
      <v-col lg="8" class="px-0">
        <div class="planButtons">
          <v-btn-toggle v-model="toggleBtn">
            <v-btn color="#4A95E3" variant="text" prepend-icon="fi fi-sr-bank">
              سازمانی
            </v-btn>

            <v-btn
              color="#4A95E3"
              variant="text"
              prepend-icon="fi fi-sr-search-alt"
            >
              استعلام قیمت
            </v-btn>

            <v-btn color="#4A95E3" variant="text" prepend-icon="fi fi-sr-pulse">
              درخواست دمو
            </v-btn>

            <v-btn
              color="#4A95E3"
              variant="text"
              prepend-icon="fi fi-sr-treatment"
            >
              درخواست خدمات
            </v-btn>
            <v-btn
              color="#4A95E3"
              variant="text"
              prepend-icon="fi fi-sr-ambulance"
            >
              درخواست تعمیرات
            </v-btn>
          </v-btn-toggle>
          <transition-group name="fade" mode="out-in">
            <div class="planForm form1 px-8 mt-5" v-if="toggleBtn == 0">
              <div class="d-flex flex-column justify-start">
                <checkbox :isChecked="false" class="my-1"
                  >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                  با استفاده از طراحان گرافیک است
                </checkbox>
                <checkbox :isChecked="false" class="my-1"
                  >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                  با استفاده از طراحان گرافیک است
                </checkbox>
                <checkbox :isChecked="false" class="my-1"
                  >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                  با استفاده از طراحان گرافیک است
                </checkbox>
              </div>
              <v-row class="planInputs pa-md-0 pb-6">
                <v-col cols="12" sm="6" md="4" class="pa-md-2 py-0">
                  <v-text-field
                    variant="solo"
                    class="primaryInput"
                    placeholder="نام و نام خانوادگی"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="pa-md-2 py-0">
                  <v-text-field
                    variant="solo"
                    class="primaryInput"
                    placeholder="تماس"
                  ></v-text-field
                ></v-col>
                <v-col cols="6" md="4" class="pa-md-2 py-0">
                  <v-text-field
                    variant="solo"
                    class="primaryInput"
                    placeholder="استان"
                  ></v-text-field
                ></v-col>
                <!-- <v-col cols="12" class="ma-0 pa-0 mt-n6 d-flex"> -->
                <v-col cols="6" md="4" class="pa-md-2 py-0 mt-md-n4">
                  <v-text-field
                    variant="solo"
                    class="primaryInput"
                    placeholder="شهر"
                  ></v-text-field
                ></v-col>
                <v-col cols="12" md="4" class="pa-md-2 py-0 mt-md-n4">
                  <v-text-field
                    variant="solo"
                    class="primaryInput"
                    placeholder="توضیحات محصول"
                  ></v-text-field
                ></v-col>
                <v-col cols="12" md="4" class="pa-md-2 py-0 mt-md-n4">
                  <v-btn
                    class="primaryBtn py-7"
                    style="font-weight: 900"
                    block
                    color="#F7C737"
                    >ثبت درخواست</v-btn
                  >
                </v-col>
                <!-- </v-col> -->
              </v-row>
            </div>
            <div class="planForm form1 px-8 mt-5" v-if="toggleBtn == 1">
              <div class="d-flex flex-column justify-start">
                <checkbox :isChecked="false" class="my-1"
                  >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                  با استفاده از طراحان گرافیک است
                </checkbox>
                <checkbox :isChecked="false" class="my-1"
                  >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                  با استفاده از طراحان گرافیک است
                </checkbox>
                <checkbox :isChecked="false" class="my-1"
                  >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                  با استفاده از طراحان گرافیک است
                </checkbox>
              </div>
              <v-row class="planInputs pa-md-0 pb-6">
                <v-col cols="12" sm="6" md="4" class="pa-md-2 py-0">
                  <v-text-field
                    variant="solo"
                    class="primaryInput"
                    placeholder="نام و نام خانوادگی"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="pa-md-2 py-0">
                  <v-text-field
                    variant="solo"
                    class="primaryInput"
                    placeholder="تماس"
                  ></v-text-field
                ></v-col>
                <v-col cols="6" md="4" class="pa-md-2 py-0">
                  <v-text-field
                    variant="solo"
                    class="primaryInput"
                    placeholder="استان"
                  ></v-text-field
                ></v-col>
                <!-- <v-col cols="12" class="ma-0 pa-0 mt-n6 d-flex"> -->
                <v-col cols="6" md="4" class="pa-md-2 py-0 mt-md-n4">
                  <v-text-field
                    variant="solo"
                    class="primaryInput"
                    placeholder="شهر"
                  ></v-text-field
                ></v-col>
                <v-col cols="12" md="4" class="pa-md-2 py-0 mt-md-n4">
                  <v-text-field
                    variant="solo"
                    class="primaryInput"
                    placeholder="توضیحات محصول"
                  ></v-text-field
                ></v-col>
                <v-col cols="12" md="4" class="pa-md-2 py-0 mt-md-n4">
                  <v-btn
                    class="primaryBtn py-7"
                    style="font-weight: 900"
                    block
                    color="#F7C737"
                    >ثبت درخواست</v-btn
                  >
                </v-col>
                <!-- </v-col> -->
              </v-row>
            </div>
            <div class="planForm form1 px-8 mt-5" v-if="toggleBtn == 2">
              <div class="d-flex flex-column justify-start">
                <checkbox :isChecked="false" class="my-1"
                  >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                  با استفاده از طراحان گرافیک است
                </checkbox>
                <checkbox :isChecked="false" class="my-1"
                  >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                  با استفاده از طراحان گرافیک است
                </checkbox>
                <checkbox :isChecked="false" class="my-1"
                  >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                  با استفاده از طراحان گرافیک است
                </checkbox>
              </div>
              <v-row class="planInputs pa-md-0 pb-6">
                <v-col cols="12" sm="6" md="4" class="pa-md-2 py-0">
                  <v-text-field
                    variant="solo"
                    class="primaryInput"
                    placeholder="نام و نام خانوادگی"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="pa-md-2 py-0">
                  <v-text-field
                    variant="solo"
                    class="primaryInput"
                    placeholder="تماس"
                  ></v-text-field
                ></v-col>
                <v-col cols="6" md="4" class="pa-md-2 py-0">
                  <v-text-field
                    variant="solo"
                    class="primaryInput"
                    placeholder="استان"
                  ></v-text-field
                ></v-col>
                <!-- <v-col cols="12" class="ma-0 pa-0 mt-n6 d-flex"> -->
                <v-col cols="6" md="4" class="pa-md-2 py-0 mt-md-n4">
                  <v-text-field
                    variant="solo"
                    class="primaryInput"
                    placeholder="شهر"
                  ></v-text-field
                ></v-col>
                <v-col cols="12" md="4" class="pa-md-2 py-0 mt-md-n4">
                  <v-text-field
                    variant="solo"
                    class="primaryInput"
                    placeholder="توضیحات محصول"
                  ></v-text-field
                ></v-col>
                <v-col cols="12" md="4" class="pa-md-2 py-0 mt-md-n4">
                  <v-btn
                    class="primaryBtn py-7"
                    style="font-weight: 900"
                    block
                    color="#F7C737"
                    >ثبت درخواست</v-btn
                  >
                </v-col>
                <!-- </v-col> -->
              </v-row>
            </div>
            <div class="planForm form1 px-8 mt-5" v-if="toggleBtn == 3">
              <div class="d-flex flex-column justify-start">
                <checkbox :isChecked="false" class="my-1"
                  >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                  با استفاده از طراحان گرافیک است
                </checkbox>
                <checkbox :isChecked="false" class="my-1"
                  >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                  با استفاده از طراحان گرافیک است
                </checkbox>
                <checkbox :isChecked="false" class="my-1"
                  >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                  با استفاده از طراحان گرافیک است
                </checkbox>
              </div>
              <v-row class="planInputs pa-md-0 pb-6">
                <v-col cols="12" sm="6" md="4" class="pa-md-2 py-0">
                  <v-text-field
                    variant="solo"
                    class="primaryInput"
                    placeholder="نام و نام خانوادگی"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="pa-md-2 py-0">
                  <v-text-field
                    variant="solo"
                    class="primaryInput"
                    placeholder="تماس"
                  ></v-text-field
                ></v-col>
                <v-col cols="6" md="4" class="pa-md-2 py-0">
                  <v-text-field
                    variant="solo"
                    class="primaryInput"
                    placeholder="استان"
                  ></v-text-field
                ></v-col>
                <!-- <v-col cols="12" class="ma-0 pa-0 mt-n6 d-flex"> -->
                <v-col cols="6" md="4" class="pa-md-2 py-0 mt-md-n4">
                  <v-text-field
                    variant="solo"
                    class="primaryInput"
                    placeholder="شهر"
                  ></v-text-field
                ></v-col>
                <v-col cols="12" md="4" class="pa-md-2 py-0 mt-md-n4">
                  <v-text-field
                    variant="solo"
                    class="primaryInput"
                    placeholder="توضیحات محصول"
                  ></v-text-field
                ></v-col>
                <v-col cols="12" md="4" class="pa-md-2 py-0 mt-md-n4">
                  <v-btn
                    class="primaryBtn py-7"
                    style="font-weight: 900"
                    block
                    color="#F7C737"
                    >ثبت درخواست</v-btn
                  >
                </v-col>
                <!-- </v-col> -->
              </v-row>
            </div>
            <div class="planForm form1 px-8 mt-5" v-if="toggleBtn == 4">
              <div class="d-flex flex-column justify-start">
                <checkbox :isChecked="false" class="my-1"
                  >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                  با استفاده از طراحان گرافیک است
                </checkbox>
                <checkbox :isChecked="false" class="my-1"
                  >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                  با استفاده از طراحان گرافیک است
                </checkbox>
                <checkbox :isChecked="false" class="my-1"
                  >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                  با استفاده از طراحان گرافیک است
                </checkbox>
              </div>
              <v-row class="planInputs pa-md-0 pb-6">
                <v-col cols="12" sm="6" md="4" class="pa-md-2 py-0">
                  <v-text-field
                    variant="solo"
                    class="primaryInput"
                    placeholder="نام و نام خانوادگی"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="pa-md-2 py-0">
                  <v-text-field
                    variant="solo"
                    class="primaryInput"
                    placeholder="تماس"
                  ></v-text-field
                ></v-col>
                <v-col cols="6" md="4" class="pa-md-2 py-0">
                  <v-text-field
                    variant="solo"
                    class="primaryInput"
                    placeholder="استان"
                  ></v-text-field
                ></v-col>
                <!-- <v-col cols="12" class="ma-0 pa-0 mt-n6 d-flex"> -->
                <v-col cols="6" md="4" class="pa-md-2 py-0 mt-md-n4">
                  <v-text-field
                    variant="solo"
                    class="primaryInput"
                    placeholder="شهر"
                  ></v-text-field
                ></v-col>
                <v-col cols="12" md="4" class="pa-md-2 py-0 mt-md-n4">
                  <v-text-field
                    variant="solo"
                    class="primaryInput"
                    placeholder="توضیحات محصول"
                  ></v-text-field
                ></v-col>
                <v-col cols="12" md="4" class="pa-md-2 py-0 mt-md-n4">
                  <v-btn
                    class="primaryBtn py-7"
                    style="font-weight: 900"
                    block
                    color="#F7C737"
                    >ثبت درخواست</v-btn
                  >
                </v-col>
                <!-- </v-col> -->
              </v-row>
            </div>
          </transition-group>
        </div>
      </v-col>
      <v-col lg="4" class="px-12 mt-lg-0 mt-16">
        <div class="planDetailCard">
          <v-img
            class="planLogo"
            width="145"
            src="../assets/images/hospital.png"
          />
          <p>سازمانی</p>
          <span>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
          </span>
        </div>
      </v-col>
    </v-row>
  </v-col>
</template> 

<style lang="scss">
@import "../../public/assets/scss/components/choosePlan.scss";
</style>