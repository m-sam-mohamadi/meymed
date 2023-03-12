<template>
  <div @click="isChecked = !isChecked" class="checkbox">
    <div class="checkboxBox">
      <v-icon v-if="isChecked" icon="fi fi-br-check" />
    </div>
    <div class="checkboxText">
      <slot />
    </div>
    <input hidden type="checkbox" :checked="isChecked" />
  </div>
</template>

<script  >
export default {
  props: {
    isChecked: Boolean,
  },
};
</script>

<style lang="scss">
@import "../public/assets/scss/components/checkbox.scss";
</style>