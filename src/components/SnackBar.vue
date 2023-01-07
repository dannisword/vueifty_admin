<template>
  <v-snackbar v-model="options.visible" :timeout="3000" :color="options.color">
    {{ options.text }}
    <template v-slot:action="{ attrs }">
      <v-btn v-bind="attrs" text @click="options.visible = false"> Close </v-btn>
    </template>
  </v-snackbar>
</template>
<script>
export default {
  name: "SnackBar",
  props: {
    options: {
      type: Object,
      default: () => ({
        color: "",
        visible: false,
        text,
      }),
    },
  },
};
</script>
