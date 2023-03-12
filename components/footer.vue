<script setup>
import "../public/assets/scss/components/footer.scss";
</script>
<template>
  <!-- ===== footer ===== -->
  <v-col md="12" class="footer ma-auto">
    <v-card elevation="0" class="footerCard" color="#4484C6" width="100%">
      <div class="aboutBg">
        <!-- ===== about site ===== -->
        <v-col cols="12" md="11" class="aboutSection ma-auto">
          <v-img src="/assets/images/logo.png" width="150" class="ma-auto" />
          <div class="aboutTitle">
            فروشگاه اینترنتی تجهیزات پزشکی و بیمارستانی می مد
          </div>
          <div class="aboutInfo">
            با ایجاد دسترسی عمومی آسان به ابزار و تجهیزات پزشکی با کیفیت که مورد
            تایید اداره کل تجهیزات پزشکی ایران نیز می باشند، با تعداد زیادی از
            تولیدکنندگان و واردکنندگان معتبر کالاهای پزشکی همکاری کرده و طیف
            گسترده ای از محصولات و ابزارآلات پزشکی را به صورت مستقیم و بدون
            واسطه، با قیمتی مناسب در فروشگاه آنلاین خود عرضه می کند. فروشگاه
            اینترنتی تجهیزات پزشکی می مد، مجموعه ای از تجهیزات اتاق عمل، تجهیزات
            آزمایشگاهی، ابزار جراحی، تجهیزات هتلینگ بیمارستانی، تجهیزات پزشکی
            عمومی و خانگی، دستگاه های استریلیزاسون و لندری بیمارستانی، تجهیزات
            تخصصی زنان و زایمان، دستگاه ها و تجهیزات تصویربرداری پزشکی، محصولات
            فیزیوتراپی، توانبخشی و کاردرمانی، لوازم مصرفی پزشکی و بیمارستانی را
            در یک فروشگاه آنلاین گرد هم آورده تا خریدار با مشاهده ی کالای پزشکی
            مورد نیاز خود، اطلاعات لازم در رابطه با کالا (شامل قیمت، توضیحات کلی
            و مشخصات فنی کالا، کشور تولید کننده و رزومه ی برند مورد نظر و همچنین
            عکس و ویدیوی کالای پزشکی و مراقبتی) را دریافت و با مقایسه ی آن در
            بازار رقابتی حاضر، راحتی و اطمینان در خرید تجهیزات پزشکی بیمارستانی
            و آزمایشگاهی را با ما تجربه کند
          </div>
        </v-col>
      </div>
      <!-- ===== footer options ===== -->
      <v-row class="px-10">
        <v-col cols="12" lg="6" class="pt-6">
          <div class="d-flex flex-wrap justify-space-between align-center">
            <div class="footerTitle">راه های ارتباطی</div>
            <div class="socials">
              <v-btn color="transparent" class="mx-1" size="small" icon>
                <v-avatar
                  rounded="0"
                  image="/assets/images/vector/Vector.png"
                  size="20"
                >
                </v-avatar>
              </v-btn>
              <v-btn color="transparent" class="mx-1" size="small" icon>
                <v-avatar
                  size="20"
                  rounded="0"
                  image="/assets/images/vector/Vector-1.png"
                >
                </v-avatar>
              </v-btn>
              <v-btn color="transparent" class="mx-1" size="small" icon>
                <v-avatar
                  size="20"
                  rounded="0"
                  image="/assets/images/vector/Vector-2.png"
                >
                </v-avatar>
              </v-btn>
              <v-btn color="transparent" class="1" size="small" icon>
                <v-avatar
                  size="20"
                  rounded="0"
                  image="/assets/images/vector/Vector-3.png"
                >
                </v-avatar>
              </v-btn>
            </div>
          </div>
          <ul class="footerInfo flex-wrap">
            <li class="footerList">
              <div class="fixedList">شماره تماس:</div>
              <span> 021-91014919</span>
            </li>
            <li class="footerList">
              <div class="fixedList">فکس:</div>
              <span> 021-91014919 داخلی 200</span>
            </li>
            <li class="footerList">
              <div class="fixedList">ایمیل:</div>
              <span> info.meymed@gmail.com</span>
            </li>
            <li class="footerList">
              <div class="fixedList">شعب:</div>
              <span>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز</span
              >
            </li>
          </ul>
        </v-col>
        <v-col cols="12" lg="6" class="d-flex justify-center">
          <div class="d-flex justify-space-between flex-md-nowrap flex-wrap">
            <ul class="footerInfo" style="line-height: 16px !important">
              <div class="footerTitle mb-8">دسترسی سریع</div>
              <li class="footerList"><a href="#">ورود و ثبت نام</a></li>
              <li class="footerList"><a href="#"> درباره ما </a></li>
              <li class="footerList"><a href="#"> همکاری با ما</a></li>
              <li class="footerList"><a href="#">حریم خصوصی</a></li>
            </ul>
            <ul class="footerInfo" style="line-height: 16px !important">
              <div class="footerTitle mb-8">خدمات مشتریان</div>
              <li class="footerList"><a href="#">ثبت درخواست محصول </a></li>
              <li class="footerList"><a href="#"> ارتباط با مشاوران</a></li>
              <li class="footerList"><a href="#">قوانین و مقررات می‌مد</a></li>
            </ul>
            <ul class="footerInfo" style="line-height: 18px !important">
              <div class="footerTitle mb-8">گواهی‌های می‌مد</div>
              <div class="d-flex">
                <v-card
                  color="white"
                  class="mx-2 overflow-hidden"
                  rounded
                  width="50"
                  height="50"
                >
                  <v-img
                    width="100%"
                    src="data:image/jpeg;base64,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"
                  />
                </v-card>
                <v-card
                  color="white"
                  class="mx-2 overflow-hidden"
                  rounded
                  width="50"
                  height="50"
                >
                  <v-img
                    width="130%"
                    :aspect-ratio="0.02"
                    src="https://graphicshop.ir/wp-content/uploads/2018/02/samandehi-ir_graphicshop-ir-1.jpg"
                  />
                </v-card>
              </div>
            </ul>
          </div>
        </v-col>
        <!-- <v-col cols="12" class="pa-0"> -->
        <v-row style="height: 100%" class="mt-10 mb-12">
          <v-col lg="7" md="6" cols="12" class="pa-0 px-6 pl-md-12 mt-auto">
            <div class="footerAlert ma-auto">
              ساعات کاری می مد از شنبه تا چهارشنبه 8 صبح الی 5 بعد از ظهر و پنج
              شنبه ها 8 صبح الی 12 ظهر است.لطفا در غیر این ساعات فقط از طریق
              واتساپ پیام خود را به سایت می مد ارسال فرمایید تا همکاران فروش در
              اسرع وقت (اولین ساعات کاری) خدمت شما تماس حاصل نمایند
            </div>
          </v-col>
          <v-col lg="5" md="6" cols="12" class="pa-0 px-4 mt-md-auto mt-10">
            <div class="footerTitle text-center">
              با عضویت در خبرنامه فروشگاه می‌مد از <br />محصولات جدید و
              به‌روزرسانی‌ها با خبر شوید
            </div>
            <div class="newsInput mt-6 mb-n5">
              <v-text-field
                class="primaryInput email"
                placeholder=" لطفا ایمیل خود را وارد کنید"
                variant="solo"
              ></v-text-field>
              <v-btn
                color="#494949"
                theme="dark"
                class="newsBtn primaryBtn pa-7 px-6"
                >عضویت</v-btn
              >
            </div>
          </v-col>
        </v-row>
        <!-- </v-col> -->
      </v-row>
    </v-card>
    <!-- ===== copyright===== -->
    <div class="copyright my-6 mt-8">
      استفاده از مطالب فروشگاه اینترنتی می مد فقط برای مقاصد غیرتجاری و با ذکر
      منبع بلامانع است. کلیه حقوق این سایت متعلق به شرکت لوازم پزشکی میثم
      طبرستان (فروشگاه اینترنتی تجهیزات پزشکی و بیمارستانی می مد) می‌باشد.
    </div>
  </v-col>
</template>


// <style lang="scss">
// @import "../public/assets/scss/components/footer.scss";
//
</style>