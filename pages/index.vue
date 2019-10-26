<template>
  <v-container class="pa-0" fluid>
    <v-carousel
      cycle
      height="700"
      hide-delimiter-background
      :show-arrows="showArrows"
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
        :src="slide.src"
      >
        <v-sheet
          color="transparent"
          height="100%"
          tile
        >
          <v-row
            justify="center"
          >
            <div class="display-2 slide-text text-center">{{slide.text}}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      showArrows: false,
      slides: [
        {
          src: require('../static/img/55-moorgate-1.jpg'),
          text: 'Residential',
        },
        {
          src: require('../static/img/bridge-house-1.jpg'),
          text: 'Concrete frame',
        },
        {
          src: require('../static/img/cambridge-house-3.jpg'),
          text: 'Refurbishment',
        },
        {
          src: require('../static/img/kings-college-4.jpg'),
          text: 'Temporary works',
        },
        {
          src: require('../static/img/bridge-house-5.jpg'),
          text: 'Steel frame',
        },
      ],
    }
  }
}
</script>

<style scoped>
.slide-text {
  background-color: black;
  opacity: .4;
  margin-top: 2rem;
  padding: 1rem 0;
  width: 100%;
  justify-content: center;
}
</style>
