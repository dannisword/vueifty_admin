<template>
  <div>
    <v-navigation-drawer v-model="sidebar.opened" app>
      <v-list-item dark style="background-color: #1976d2">
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Protal</v-list-item-title>
          <v-list-item-subtitle> protal </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list>
        <div v-for="item in menus">
          <v-list-item v-if="item.hasChildren == false" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-group
            v-else
            :key="item.index"
            v-model="item.active"
            :prepend-icon="item.icon"
            no-action
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title
                  v-text="item.name"
                  :to="item.path"
                ></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="child in item.childrens"
              :key="child.index"
              @click="onNav(child)"
              link
            >
              <v-list-item-content>
                <v-list-item-title v-text="child.name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </div>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import data from "@/assets/data.json";

export default {
  name: "SideBar",
  data: () => ({
    drawer: null,
    menus: [],
    selectedItem: {},
    links: [
      ["mdi-inbox-arrow-down", "Inbox"],
      ["mdi-send", "Send"],
      ["mdi-delete", "Trash"],
      ["mdi-alert-octagon", "Spam"],
    ],
  }),
  computed: {
    ...mapGetters(["sidebar"]),
  },
  created() {
    this.menus = data.menu;
  },
  methods: {
    onClick(val, children = false) {
      console.log(val);
    },
    onNav(menu) {
      this.$router.push(menu.path);
    },
  },
};
</script>
<style scoped>
.v-list {
  padding: 0px;
}
</style>
