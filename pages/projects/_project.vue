<template>
  <v-container class="pt-3 pb-1">
    <v-card class="mb-3" color="#fafafa">
      <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(photo,i) in project.images"
          :key="i"
          :src="path(photo)"
        ></v-carousel-item>
      </v-carousel>
      <v-card-title class="headline primary--text text-uppercase subheading">
        {{project.name}}
      </v-card-title>
      <v-card-text class="pt-0 body-1">
        {{project.description}}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'project',
  computed: {
    projects () {
      return this.$store.getters['projects/projects'];
    },
    project () {
      return this.projects.find(project => project.path === `/projects/${this.$route.params.project}`);
    }
  },
  methods: {
    path(image) {
      return require(`~/static/img/${image}`)
    }
  }
}
</script>


