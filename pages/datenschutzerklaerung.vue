<template>
  <default-layout page-header-title="Datenschutzerklärung">
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col>
            <h1>Datenschutzerklärung</h1>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </default-layout>
</template>
<script setup>
import { useHead } from "@vueuse/head";

useHead({
  title: () => "Datenschutzerklärung",
  bodyAttrs: { class: { dark: true } },
});
</script>
