<template>
  <ion-app>
    <main-menu></main-menu>
    <ion-content id="main-content">
      <ion-router-outlet />
    </ion-content>
  </ion-app>
</template>
<script></script>
<script setup>
useNuxtApp().hook("app:beforeMount", () => console.log("app beforeMount hook"));
useNuxtApp().hook("app:mounted", () => {
  console.log("app mounted hook");

  requestAnimationFrame(() => {
    console.log("requestAnimationFrame");
  });
});
onMounted(() => console.log("component mounted"));
</script>
