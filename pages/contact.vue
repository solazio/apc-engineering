<template>
  <v-container class="pt-3 pb-1" fluid>
    <v-row justify="space-around">
      <v-col cols="12" md="8">
        <v-card flat color="transparent">
          <v-card-title class="title font-weight-regular text-uppercase">Contact us</v-card-title>
          <v-card-text class="body-1">
            <br />To discuss your project, feel free to contact us via our form below or by calling
            <span
              class="my-phone"
            >&nbsp;&nbsp;+44 7565 416136.</span>
          </v-card-text>
        </v-card>
        <v-row class="pl-4 pr-4">
          <v-col cols="12" md="4">
            <v-text-field
              v-model="name"
              :error-messages="nameErrors"
              :counter="30"
              label="Name"
              required
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              label="E-mail"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="phone"
              :error-messages="phoneErrors"
              :counter="15"
              label="Phone number (optional)"
              @input="$v.phone.$touch()"
              @blur="$v.phone.$touch()"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="pl-4 pr-4">
          <v-col cols="12">
            <v-textarea
              v-model="message"
              :error-messages="messageErrors"
              :counter="250"
              label="Message"
              @input="$v.message.$touch()"
              @blur="$v.message.$touch()"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row class="pl-7 pr-7">
          <v-btn @click="clear" depressed color="secondary" outlined>clear</v-btn>
          <div class="flex-grow-1"></div>
          <v-btn @click="submit" depressed color="secondary" outlined>send</v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email, alphaNum } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(30) },
    email: { required, email },
    phone: { alphaNum, maxLength: maxLength(15) },
    message: { required, maxLength: maxLength(250) }
  },

  data: () => ({
    name: '',
    email: '',
    phone: '',
    message: ''
  }),

  computed: {
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength &&
        errors.push('Name must be at most 30 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    phoneErrors() {
      const errors = []
      if (!this.$v.phone.$dirty) return errors
      !this.$v.phone.maxLength &&
        errors.push('Phone number must be at most 15 characters long')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    messageErrors() {
      const errors = []
      if (!this.$v.message.$dirty) return errors
      !this.$v.message.maxLength &&
        errors.push('Message must be at most 250 characters long')
      !this.$v.message.required && errors.push('Message is required.')
      return errors
    }
  },

  methods: {
    submit() {
      this.$v.$touch()
      // Add here the submit function... post data to /contact
    },
    clear() {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.phone = ''
      this.message = ''
    }
  }
}
</script>

<style scoped>
.my-phone {
  letter-spacing: 1px;
  color: #19bd9d;
}
</style>
