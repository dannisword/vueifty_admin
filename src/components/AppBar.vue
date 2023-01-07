<template>
  <div>
    <!--
    <v-navigation-drawer v-model="drawer" app >
      <v-list-item dark style="background-color: #1976d2;">
        <v-list-item-content >
          <v-list-item-title class="text-h6"> Protal</v-list-item-title>
          <v-list-item-subtitle> protal </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="[icon, text] in links" :key="icon" link>
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app flat fixed color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer" dark></v-app-bar-nav-icon>

          <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
              transition="scale-transition"
              width="40"
          />
          
      <v-toolbar-title></v-toolbar-title>
    </v-app-bar>
-->
    <v-app-bar app color="primary" dark flat fixed height="67">
      <v-app-bar-nav-icon @click="onOpen()"> </v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-switch
        v-model="$vuetify.theme.dark"
        color="grey lighten-5"

  
      ></v-switch>

      <v-btn text>
        <span class="mr-2">登入</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "AppBar",
  data: () => ({
    drawer: null,
    links: [
      ["mdi-inbox-arrow-down", "Inbox"],
      ["mdi-send", "Send"],
      ["mdi-delete", "Trash"],
      ["mdi-alert-octagon", "Spam"],
    ],
  }),
  methods: {
    onOpen() {
      this.$store.dispatch("app/toggleSideBar");
    },
  },
};
</script>
