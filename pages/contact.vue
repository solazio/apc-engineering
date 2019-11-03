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
          <v-btn
            @click="submit"
            depressed
            color="secondary"
            outlined
            :disabled="disabledButton"
          >send</v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import Axios from 'axios'
import { required, maxLength, email, alphaNum } from 'vuelidate/lib/validators'

const API_URL = ' https://apc-engineering-server.herokuapp.com/'

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
    message: '',
    disabledButton: false
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
      if (!this.$v.$invalid) {
        this.disabledButton = true
        const self = this
        const dataToSend = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message
        }
        Axios.post(`${API_URL}/contact`, dataToSend)
        // Axios.post(`http://localhost:5000/contact`, dataToSend)
        .then(function(response) {
          self.$toast.success(response.data.message, {
            theme: 'bubble',
            duration: 4000,
            containerClass: 'toast-custom',
            icon: {
              name: 'check_circle',
              after: false
            }
          })
          self.disabledButton = false
          self.$v.$reset()
          self.name = ''
          self.email = ''
          self.phone = ''
          self.message = ''
        })
        .catch(function(error) {
          let errorMessage = 'There was an error. Please try again!'
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            errorMessage = error.response.status + ' ' + error.response.data;
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
            errorMessage = '500 Connection refused. Probably the server is down.'
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
            errorMessage = error.message;
          }
          self.$toast.error(errorMessage, {
            theme: 'bubble',
            duration: 4000,
            containerClass: 'toast-custom',
            icon: {
              name: 'error',
              after: false
            }
          })
          self.disabledButton = false
        })
      }
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

<style>
.my-phone {
  letter-spacing: 1px;
  color: #19bd9d;
}
.toast-custom {
  opacity: 0.95;
  font-family: 'Raleway', sans-serif;
}
@media only screen and (max-width: 720px) {
  .toast-custom {
    padding-top: 3rem;
  }
}
</style>
