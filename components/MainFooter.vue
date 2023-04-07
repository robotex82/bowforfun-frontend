<template>
  <ion-footer>
    <ion-toolbar>
      <ion-title>
        {{ title }}
      </ion-title>
    </ion-toolbar>
  </ion-footer>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>
<style scoped></style>
