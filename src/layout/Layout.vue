<template>
  <div>
    <AppBar></AppBar>
    <SideBar></SideBar>
    <v-main>
      <router-view />
    </v-main>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import AppBar from "@/components/AppBar";
import SideBar from "@/components/SideBar";

export default {
  name: "Layout",
  components: {
    AppBar,
    SideBar,
  },
  computed:{
    ...mapGetters(["sidebar"]),
  },
  created() {
    this.sidebar.opened = true;
  },
};
</script>
