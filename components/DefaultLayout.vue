<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="openMenu()" expand="full">
            <ion-icon slot="icon-only" :icon="menuOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>{{ pageHeaderTitle }}</ion-title>
        <ion-buttons slot="end">
          <ion-back-button :default-href="pageBackLinkHref" />
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot />
    </ion-content>
    <main-footer :title="pageFooterTitle" />
  </ion-page>
</template>
<script>
import { menuOutline } from 'ionicons/icons'
import { menuController } from '@ionic/vue'
export default {
  props: {
    pageBackLinkHref: {
      type: String,
      required: false,
      default: null
    },
    pageFooterTitle: {
      type: String,
      required: false,
      default: null
    },
    pageHeaderTitle: {
      type: String,
      required: true
    }
  },
  methods: {
    openMenu() {
      menuController.open('app-menu')
    }
  },
  setup() {
    return { menuOutline }
  }
}
</script>
