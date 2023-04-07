<template>
  <ion-menu menu-id="app-menu" content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Bowl for fun</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item
          v-for="menuItem in menuItems"
          :key="menuItem.key"
          lines="full"
          detail="false"
          button
          @click="menuNavigation(menuItem.url)"
        >
          <ion-icon slot="start" :icon="menuItem.icon" />
          <ion-label> {{ menuItem.label }} </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script>
import {
  home,
  people,
  lockClosed,
  newspaper,
  informationCircle,
  businessOutline,
} from "ionicons/icons";
import { menuController } from "@ionic/vue";

export default {
  data() {
    return {
      menuItems: [
        {
          key: "home",
          icon: home,
          label: "Home",
          url: "/",
        },
        {
          key: "privacy",
          icon: lockClosed,
          label: "Datenschutzerklärung",
          url: "/datenschutzerklaerung",
        },
        {
          key: "imprint",
          icon: newspaper,
          label: "Impressum",
          url: "/impressum",
        },
        {
          key: "about",
          icon: informationCircle,
          label: "About",
          url: "/about",
        },
      ],
    };
  },
  setup() {
    return {
      home,
      people,
      lockClosed,
      newspaper,
      informationCircle,
      businessOutline,
    };
  },
  methods: {
    menuNavigation(url) {
      menuController.close("app-menu");
      this.$router.push(url);
    },
  },
};
</script>
