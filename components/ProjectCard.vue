<template>
  <v-card class="mb-3" color="#fafafa">
        <v-img
          :src="path(projectImage)"
          aspect-ratio="1"
          class="my-image"
          gradient
        ></v-img>
    <v-card-title class="headline primary--text text-uppercase subheading pt-0">
      {{projectName}}
    </v-card-title>
    <v-card-text class="pt-0 body-1">
      {{projectDescription | truncate }}
    </v-card-text>
    <v-card-actions class="pb-3 pr-3">
      <v-spacer />
      <v-btn
        color="secondary"
        depressed
        outlined
        nuxt
        :to="projectURL"
      >Read More</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props:['projectName','projectImage','projectDescription','projectURL'],
  methods: {
    path(image) {
      return require(`../static/img/${image}`)
    }
  },
  filters: {
    truncate: function(value) {
      String.prototype.trunc= function (length) {
        return this.length>length ? this.substring(0, length) + '...' : this;
      }
      // if (value.length > 200) {
      //   value = value.substring(0, 200) + '...';
      // }
      return value.trunc(200)
    },
  }
}
</script>

<style scoped>
.my-image {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 90%);
  max-height: 500px;
}
</style>
