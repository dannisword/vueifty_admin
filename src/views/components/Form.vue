<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="name"
            :error-messages="nameValid"
            :counter="10"
            label="Name"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="password"
            :error-messages="passwordValid"
            :counter="10"
            label="Name"
            required
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
const passwordValidate = function (value) {
  const regrex = /^(?=.{8,12}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/g;
  return regrex.test(value);
};

export default {
  name: "Form",
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(10) },
    password: { required, passwordValidate },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },
  data: () => ({
    valid: true,
    name: "",
    password: "",
    userForm: {
      firstname: "",
      lastname: "",
      email: "",
    },
  }),
  computed: {
    nameValid() {
      const errors = [];
      if (this.$v.name.$dirty == false) {
        return errors;
      }
      if (this.$v.name.maxLength == false) {
        errors.push("Name must be at most 10 characters long");
      }

      if (this.$v.name.required == false) {
        errors.push("Name is required.");
      }
      return errors;
    },
    passwordValid() {
      const errors = [];
      if (this.$v.password.$dirty == false) {
        return errors;
      }
      if (this.$v.password.passwordValidate == false) {
        return "error";
      }
    },
  },
  created() {},
};
</script>
