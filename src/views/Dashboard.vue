<template>
  <v-container>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-toolbar color="primary" dark>Opening from the bottom</v-toolbar>

        <v-card-text>
          <div class="text-h2 pa-12">Hello world!</div>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <div class="text-center">
      <v-btn color="primary" @click="onOpen()"> Reset </v-btn>
      Dashboard

      <v-toolbar flat height="72">
        <v-switch
          v-model="$vuetify.theme.dark"
          hint="This toggles the global state of the Vuetify theme"
          inset
          label="Vuetify Theme Dark"
          persistent-hint
        ></v-switch>
      </v-toolbar>
    </div>

    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      :options.sync="options"
      item-key="name"
      class="elevation-1"
      :footer-props="{
        showFirstLastPage: true,
        firstIcon: 'mdi-arrow-collapse-left',
        lastIcon: 'mdi-arrow-collapse-right',
        prevIcon: 'mdi-minus',
        nextIcon: 'mdi-plus',
      }"
    ></v-data-table>
    <SnackBar :options="snackOptions"></SnackBar>
    <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
      {{ snackText }}
      <template v-slot:action="{ attrs }">
        <v-btn v-bind="attrs" text @click="snack = false"> X </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>
<script>
import SnackBar from "@/components/SnackBar";
export default {
  name: "Dasboard",
  components:{
    SnackBar
  },
  data: () => ({
    dialog: false,
    options: {},
    snackOptions: {},
    snack: false,
    snackColor: "",
    snackText: "",
    headers: [
      {
        text: "名稱",
        align: "start",
        value: "name",
      },
      { text: "類別", value: "category" },
    ],
    desserts: [
      {
        name: "Frozen Yogurt",
        category: "Ice cream",
      },
      {
        name: "Ice cream sandwich",
        category: "Ice cream",
      },
      {
        name: "Eclair",
        category: "Cookie",
      },
      {
        name: "Cupcake",
        category: "Pastry",
      },
      {
        name: "Gingerbread",
        category: "Cookie",
      },
      {
        name: "Jelly bean",
        category: "Candy",
      },
      {
        name: "Lollipop",
        category: "Candy",
      },
      {
        name: "Honeycomb",
        category: "Toffee",
      },
      {
        name: "Donut",
        category: "Pastry",
      },
      {
        name: "KitKat",
        category: "Candy",
      },
    ],
  }),
  watch: {
    options: {
      handler() {
        this.onLoad();
      },
      deep: true,
    },
  },
  created() {
    const dark = {
      primary: "#21CFF3",
      accent: "#FF4081",
      secondary: "#21dc79",
      success: "#86af3f",
      info: "#f34fc6",
      warning: "#FB8C00",
      error: "#FF5252",
    };
    //this.$vuetify.theme.themes.name = "color";
    //this.$vuetify.theme.themes.dark[0] = dark;
    this.$vuetify.theme.dark = false;
    this.snackOptions = {
      color: "warning",
      visible: false,
      text: "123",
    };
  },
  methods: {
    onOpen() {
      //this.alert = true;
      //this.$vuetify.theme.themes.dark[i] = dark[i];
      //this.snack = true;
      //this.snackColor = "success";
      //this.snackText = "新增成功";
      this.snackOptions.visible = true;
    },
    onLoad() {
      const { sortBy, sortDesc, page, itemsPerPage } = this.options;
      console.log(this.options);
    },
  },
};
</script>
