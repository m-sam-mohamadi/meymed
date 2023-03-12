<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { ref } from "vue";
let tab = ref(null);
let rating = ref(null);
let name = ref("");
let review = ref("");
let isPlaying = ref(false);
let isPlaying2 = ref(false);
let seekbar = ref(0);
let seekbarVol = ref(0);
const clientSlider = ref(null);
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
const breakpoint2 = ref({
  500: {
    itemsToShow: 2,
  },
  700: {
    itemsToShow: 4,
    snapAlign: "center",
  },
  1024: {
    itemsToShow: 5,
  },
  2048: {
    itemsToShow: 6,
  },
});

let comments = ref([
  {
    name: "کاربر می مد",
    text: ` باشد و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                هدف بهبود ابزارهای کاربردی می طراحان گرافیک است چاپگرها و متون
                بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم
                متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از `,
    rate: 3,
  },
  {
    name: "کاربر می مد",
    text: ` باشد و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                هدف بهبود ابزارهای کاربردی می طراحان گرافیک است چاپگرها و متون
                بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم
                متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از `,
    rate: 3,
  },
]);

function addReview() {
  if (name.value == "" || review.value == "") return;
  comments.value.push({
    name: name.value,
    text: review.value,
    rate: rating.value,
  });
  name.value = "";
  review.value = "";
  rating.value = "";
}
function toggleVideo() {
  let video = document.getElementById("video");
  let icon = document.querySelector(".playBtn");
  if (isPlaying.value == false) {
    video.play();
    icon.style.opacity = 0;
  } else {
    video.pause();
    icon.style.opacity = 1;
  }
  isPlaying.value = !isPlaying.value;
}
function toggleAudio() {
  let audio = document.getElementById("audio");
  console.log(audio);
  if (isPlaying2.value == false) {
    audio.play();
  } else {
    audio.pause();
  }
  isPlaying2.value = !isPlaying2.value;
}
</script>
<template>
  <v-tabs
    v-model="tab"
    color="#4A95E3"
    class="mt-10 primaryBtn pa-10 pb-5"
    bg-color="white"
    style="box-shadow: none !important"
    align-tabs="center"
  >
    <v-tab :value="1">مشخصات</v-tab>
    <v-tab :value="2">نظرات</v-tab>
    <v-tab :value="3">خریداران</v-tab>
    <v-tab :value="4">محتوای چند رسانه ای</v-tab>
  </v-tabs>
  <v-window v-model="tab" class="mt-8">
    <v-window-item :value="1">
      <v-card class="d-flex justify-center align-start pa-6 primaryBtn">
        <v-col cols="12" md="6">
          <div class="tabTitle">
            <v-icon icon="fi fi-rr-subtitles" class="ml-4" />توضیحات تکمیلی
          </div>
          <p
            class="mt-6 pl-8"
            style="
              font-weight: 400;
              font-size: 13px;
              text-align: right;
              line-height: 22px;
              color: #353535;
            "
          >
            دستکش نخی با روکش نیتریل بافته شده از پارچه کشبافت پلی_استر سایز
            خیلی بزرگ XL پوشش کشبافت بدون درز و فشرده دارای پوشش لاتکس سبک و
            مقاوم نرم، انعطاف پذیر، راحتی دست حین کار و عدم احساس خستگی طراحی
            شده برای کار در فضاهای باز در زمستان دارای مقاومت بالا و ویژگی ضد
            لغزش بودن دستکش در دست مناسب برای ساخت و ساز ، انبارداری ، صنعت
            فلزات و شیشه ای ، مونتاژ خودرو ، جابجایی وسایل تیز و برنده ، جابجایی
            شیشه دستکش نخی با روکش نیتریل بافته شده از پارچه کشبافت پلی_استر
            سایز خیلی بزرگ XL پوشش کشبافت بدون درز و فشرده دارای پوشش لاتکس سبک
            و مقاوم نرم، انعطاف پذیر، راحتی دست حین کار و عدم احساس خستگی طراحی
            شده برای کار در فضاهای باز در زمستان دارای مقاومت بالا و ویژگی ضد
            لغزش بودن دستکش در دست مناسب برای ساخت و ساز ، انبارداری ، صنعت
            فلزات و شیشه ای ، مونتاژ خودرو ، جابجایی وسایل تیز و برنده ، جابجایی
            شیشه دستکش نخی با روکش نیتریل بافته شده از پارچه کشبافت پلی_استر
            سایز خیلی بزرگ XL پوشش کشبافت بدون درز و فشرده دارای پوشش لاتکس سبک
            و مقاوم نرم، انعطاف پذیر، راحتی دست حین کار و عدم احساس خستگی طراحی
            شده برای کار در فضاهای باز در زمستان دارای مقاومت بالا و ویژگی ضد
            لغزش بودن دستکش در دست مناسب برای ساخت و ساز ، انبارداری ، صنعت
            فلزات و شیشه ای ، مونتاژ خودرو ، جابجایی وسایل تیز و برنده ، جابجایی
            شیشه
          </p>
        </v-col>
        <v-col cols="12" md="6" class="px-12">
          <div class="tabTitle">
            <v-icon icon="fi fi-rr-comment-info" class="ml-4" />مشخصات فنی
          </div>
          <div class="specTable mt-6">
            <div class="specs d-flex">
              <div class="specTitle">تعداد گاز</div>
              <div class="specTitle">سه گاز AIR ,O2 ,N2O</div>
            </div>
            <div class="specs d-flex">
              <div class="specTitle">قطع خودکار</div>
              <div class="specTitle">دارد</div>
            </div>
            <div class="specs d-flex">
              <div class="specTitle">آلارم نوری و صوتی</div>
              <div class="specTitle">دارد</div>
            </div>
            <div class="specs d-flex">
              <div class="specTitle">جنس پایه</div>
              <div class="specTitle">سلکتتیک</div>
            </div>
            <div class="specs d-flex">
              <div class="specTitle">لوپ تنفسی</div>
              <div class="specTitle">دارد</div>
            </div>
            <div class="specs d-flex">
              <div class="specTitle">قطع خودکار</div>
              <div class="specTitle">دارد</div>
            </div>
            <div class="specs d-flex">
              <div class="specTitle">آلارم نوری و صوتی</div>
              <div class="specTitle">دارد</div>
            </div>
          </div>
        </v-col>
      </v-card>
    </v-window-item>
    <v-window-item :value="2">
      <v-card class="d-flex justify-center align-start pa-6 primaryBtn">
        <v-col cols="12" md="8">
          <div class="tabTitle">
            <v-icon icon="fi fi-rr-comment-alt" class="ml-4" />نظرات
          </div>

          <div
            class="mt-6 pl-12"
            v-for="comment in comments"
            :key="comment.length"
          >
            <div class="d-flex justify-space-between align-center">
              <h5>{{ comment.name }}</h5>
              <v-rating :model-value="comment.rate" readonly class="ml-4">
                <template v-slot:item="props">
                  <v-icon
                    size="16"
                    :color="props.isFilled ? '#98C6F5' : 'grey-lighten-1'"
                    icon="fi fi-ss-star"
                    class="mx-1"
                  />
                </template>
              </v-rating>
            </div>
            <div
              class="mt-4"
              style="
                font-weight: 400;
                font-size: 14px;
                line-height: 24px;
                color: #474747;
              "
            >
              {{ comment.text }}
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="4" class="pr-md-0">
          <div class="tabTitle">
            <v-icon icon="fi fi-rr-document" class="ml-4" /> ثبت نظر
          </div>
          <div class="d-flex justify-space-between align-center mt-6">
            <h5>امتیاز</h5>
            <v-rating v-model="rating">
              <template v-slot:item="props">
                <v-icon
                  size="16"
                  :color="props.isFilled ? '#98C6F5' : 'grey-lighten-1'"
                  icon="fi fi-ss-star"
                  class="mx-1"
                />
              </template>
            </v-rating>
          </div>
          <v-text-field
            class="primaryInput noShadow mt-6"
            variant="solo"
            bg-color="#F5F5F5"
            v-model="name"
            placeholder="نام و نام خانوادگی"
          ></v-text-field>
          <v-textarea
            class="primaryInput noShadow mt-n2"
            variant="solo"
            bg-color="#F5F5F5"
            v-model="review"
            placeholder="نظر"
          ></v-textarea>
          <v-btn
            style="font-size: 12px; color: #3c3c3c; font-weight: 800"
            color="#F7C737"
            class="primaryBtn rounded-10px pa-6 px-9 mx-auto mt-n2"
            @click="addReview()"
            >ثبت نظر</v-btn
          >
        </v-col>
      </v-card>
    </v-window-item>
    <v-window-item :value="3">
      <v-card class="pa-6 primaryBtn flex-column">
        <div
          style="
            font-weight: 800;
            font-size: 14px;

            color: #4a95e3;
          "
        >
          مشتریانی که این محصول را خریداری کرده اند
        </div>
        <div class="sliderPaging mt-6">
          <button class="nextBtn" @click="clientSlider.data.next">
            <v-icon icon="fi fi-rr-arrow-small-right" />
          </button>
          <button class="prevBtn" @click="clientSlider.data.prev">
            <v-icon icon="fi fi-rr-arrow-small-left" />
          </button>
        </div>
        <!-- <client-only> -->
        <!-- <v-no-ssr> -->
        <v-col cols="12">
          <carousel
            class="mt-2"
            ref="clientSlider"
            :wrap-around="true"
            :items-to-show="5"
          >
            <slide v-for="data in 6" :key="data" class="mx-0">
              <v-card
                class="pa-6 py-2 componyLogo clientList d-flex justify-center align-center"
              >
                <p>جمعیت حلال احمر ساری</p>
                <v-img
                  class="ml-4"
                  width="40"
                  :src="`/assets/images/logo${data}.png`"
                />
              </v-card>
            </slide>
          </carousel>
        </v-col>
        <!-- </v-no-ssr> -->
        <!-- </client-only> -->
      </v-card>
    </v-window-item>
    <v-window-item :value="4">
      <v-card class="pa-6 primaryBtn flex-column">
        <v-row class="mt-4 px-6 flex-md-row flex-column-reverse">
          <v-col cols="12" md="6">
            <p class="productName">معرفی محصولات برند رزمکس</p>
            <p class="productDesc mt-4">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای
              زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و
              متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان
              رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
              ایجاد کرد در این صورت می توان امید داشت
            </p>
          </v-col>
          <v-col cols="12" md="6" class="pr-8">
            <div class="videoPLayer">
              <video
                @click="toggleVideo()"
                id="video"
                poster="https://raw.githubusercontent.com/BMSVieira/moovie.js/main/demo-template/images/poster.png"
              >
                <source
                  id="video"
                  src="https://static.videezy.com/system/resources/previews/000/055/341/original/DSC_4353-2P5.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div class="playBtn" @click="toggleVideo()">
                <v-icon
                  class="playIcon"
                  :icon="!isPlaying ? 'fi fi-sr-play' : 'fi fi-sr-pause'"
                />
              </div>
            </div>
          </v-col>
        </v-row>
        <v-col cols="12" class="px-md-8 mt-6">
          <p class="productName text-center">لیست پادکست ها</p>
          <div class="podcast mt-6">
            <div class="podcastHead d-flex justify-space-between">
              <p class="productName pd">
                موج دوم کرونا همراه با دکتر علی نعیمی
              </p>
              <div class="productDesc text-left" style="width: 100%">
                13 مرداد 1400
              </div>
            </div>

            <div class="productDesc text-right mt-4" style="width: 100%">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود
            </div>
            <div class="audioPLay mt-5 d-flex flex-row-reverse align-center">
              <div class="playAudioIcon" @click="toggleAudio()">
                <v-icon
                  class="playIcon"
                  :icon="!isPlaying2 ? 'fi fi-sr-play' : 'fi fi-sr-pause'"
                />
              </div>
              <div class="audioSeekBar d-flex align-center px-10">
                <v-slider
                  v-model="seekbar"
                  color="#98C6F5"
                  :thumb-size="6"
                  elevation="0"
                ></v-slider>
                <div class="audioTime mr-4">00:00</div>
              </div>
              <div class="audioVolume d-flex align-center">
                <v-slider
                  v-model="seekbarVol"
                  color="#98C6F5"
                  elevation="0"
                  :thumb-size="6"
                  class="ml-8"
                ></v-slider>
                <v-icon class="playIcon" icon="fi-br-volume" />
              </div>
              <a
                href="https://getsamplefiles.com/download/ogg/sample-5.ogg"
                download
                class="audioDownload mr-2 ml-6 d-flex align-center"
              >
                <v-icon class="playIcon" icon="fi-br-download" />
              </a>
              <v-no-ssr>
                <audio id="audio">
                  <source
                    src="https://getsamplefiles.com/download/ogg/sample-5.ogg"
                    type="audio/ogg"
                  />
                  Your browser does not support the audio element.
                </audio>
              </v-no-ssr>
            </div>
          </div>
          <div class="podcast mt-6">
            <div class="podcastHead d-flex justify-space-between">
              <p class="productName pd">
                موج دوم کرونا همراه با دکتر علی نعیمی
              </p>
              <div class="productDesc text-left" style="width: 100%">
                13 مرداد 1400
              </div>
            </div>

            <div class="productDesc text-right mt-4" style="width: 100%">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود
            </div>
            <div class="audioPLay d-flex flex-row-reverse align-center mt-5">
              <div class="playAudioIcon" @click="toggleAudio()">
                <v-icon
                  class="playIcon"
                  :icon="!isPlaying2 ? 'fi fi-sr-play' : 'fi fi-sr-pause'"
                />
              </div>
              <div class="audioSeekBar d-flex align-center px-10">
                <v-slider
                  v-model="seekbar"
                  color="#98C6F5"
                  :thumb-size="6"
                  elevation="0"
                ></v-slider>
                <div class="audioTime mr-4">00:00</div>
              </div>
              <div class="audioVolume d-flex align-center">
                <v-slider
                  v-model="seekbarVol"
                  color="#98C6F5"
                  elevation="0"
                  :thumb-size="6"
                  class="ml-8"
                ></v-slider>
                <v-icon class="playIcon" icon="fi-br-volume" />
              </div>
              <a
                href="https://getsamplefiles.com/download/ogg/sample-5.ogg"
                download
                class="audioDownload mr-2 ml-6 d-flex align-center"
              >
                <v-icon class="playIcon" icon="fi-br-download" />
              </a>
              <v-no-ssr>
                <audio id="audio">
                  <source
                    src="https://getsamplefiles.com/download/ogg/sample-5.ogg"
                    type="audio/ogg"
                  />
                  Your browser does not support the audio element.
                </audio>
              </v-no-ssr>
            </div>
          </div>
        </v-col>
      </v-card>
    </v-window-item>
  </v-window>
</template>
