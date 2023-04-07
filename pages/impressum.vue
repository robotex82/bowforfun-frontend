<template>
  <default-layout page-header-title="Impressum">
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col>
            <h1>Impressum</h1>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </default-layout>
</template>
<script setup>
import { useHead } from "@vueuse/head";

useHead({
  title: () => "Impressum",
  bodyAttrs: { class: { dark: true } },
});
</script>
