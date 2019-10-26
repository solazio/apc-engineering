<template>
  <v-container class="pt-3 pb-1" fluid>
    <v-row justify="space-around">
      <v-col cols="12" md="8">
        <v-card flat color="transparent">
          <v-card-title class="title font-weight-regular text-uppercase">APC Engineering</v-card-title>
          <v-card-text class="body-1">
            <br />
            <p>APC Engineering provides civil and structural engineering services to architects, builders and general public. We have extensive experience in the design of small to large scale projects in the commercial, education, healthcare, infrastructure and residential sectors. 
            </p>
            <p>We are passionate about structural design and relish the challenge of understanding complex structures, both new and existing. Our approach is to find economic, innovative and practical solutions for our clients.</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
ul {
  list-style: none;
}

ul li {
  padding-bottom: 1rem;
}
li::before {
  content: '\2714';
  font-size: large;
  color: #e92973;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}
</style>