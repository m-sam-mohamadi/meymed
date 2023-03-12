<script setup>
import { ref } from "vue";
let day = ref(0);
let hour = ref(0);
let minute = ref(0);
let second = ref(0);

let countDownToTime = ref(new Date("Sep 26, 2023 00:00:00").getTime());
let timerOutput = ref(null);
function startTimer() {
  const timeNow = new Date().getTime();
  const timeDifference = countDownToTime.value - timeNow;
  const millisecondsInOneSecond = 1000;
  const millisecondsInOneMinute = millisecondsInOneSecond * 60;
  const millisecondsInOneHour = millisecondsInOneMinute * 60;
  const millisecondsInOneDay = millisecondsInOneHour * 24;
  const differenceInDays = timeDifference / millisecondsInOneDay;
  const remainderDifferenceInHours =
    (timeDifference % millisecondsInOneDay) / millisecondsInOneHour;
  const remainderDifferenceInMinutes =
    (timeDifference % millisecondsInOneHour) / millisecondsInOneMinute;
  const remainderDifferenceInSeconds =
    (timeDifference % millisecondsInOneMinute) / millisecondsInOneSecond;
  day.value = ref(Math.floor(differenceInDays));
  hour.value = ref(Math.floor(remainderDifferenceInHours));
  minute.value = ref(Math.floor(remainderDifferenceInMinutes));
  second.value = ref(Math.floor(remainderDifferenceInSeconds));
}
onMounted(() => {
  setInterval(() => {
    startTimer();
  }, 1000);
});
</script>
<template>
  <div class="countDown">
    <div class="cdContainer">
      <div>
        <div class="cdTitle">پیشنهاد ویژه</div>
        <span class="cdDetail mt-md-0 mt-4"
          >انواع محصولات پزشکی مخصوص اتاق عمل با معتبر ترین برند های موجود در
          بازار با تخفیف ویژه فروشگاه می مد به مدت محدود</span
        >
      </div>
      <div class="cdController mt-auto flex-row flex-md-row flex-column">
        <div class="counter mt-md-0 mt-4">
          <div class="cdDate day"><span>روز</span>{{ day }}</div>
          <div class="cdDate hour"><span>ساعت</span>{{ hour }}</div>
          <div class="cdDate minute"><span>دقیقه</span>{{ minute }}</div>
          <div class="cdDate second"><span>ثانیه</span>{{ second }}</div>
        </div>
        <v-btn class="showMoreBtn mt-md-0 mt-4" style="color: #84a6ca"
          >مشاهده بیشتر</v-btn
        >
      </div>
      <v-img
        width="100%"
        src="/assets/images/hands1.png"
        class="glovesBg"
        style="max-width: 900px"
      ></v-img>
    </div>
  </div>
</template>
 
<style lang="scss">
@import "../../public/assets/scss/components/countdown.scss";
</style>