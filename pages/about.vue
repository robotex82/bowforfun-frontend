<template>
  <default-layout page-header-title="About">
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col>
            <h1>About</h1>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </default-layout>
</template>
<script setup>
import { useHead } from "@vueuse/head";

useHead({
  title: () => "About",
  bodyAttrs: { class: { dark: true } },
});
</script>
