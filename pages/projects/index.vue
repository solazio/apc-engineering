<template>
  <v-container class="pt-3 pb-1">
    <v-layout column justify-center align-center>
      <v-flex xs12 sm8 md6>
        <ProjectCard
          v-for="project in projects"
          :key="project.name"
          :projectName="project.name"
          :projectImage="project.images[0]"
          :projectDescription="project.description"
          :projectURL="project.path"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'

export default {
  components: {
    ProjectCard
  },
  computed: {
    projects () {
      return this.$store.getters['projects/projects'];
    }
  },
}
</script>