<template>
  <v-app>
    <!-------------------------------Navigation Drawer-------------------------->
    <v-navigation-drawer v-model="drawer" app disable-resize-watcher width="200">
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-------------------------------Toolbar----------------------------------->
    <v-app-bar app dark color="accent" dense>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer" />
      <v-toolbar-title class="my-title subheading">APC Engineering</v-toolbar-title>
      <v-spacer />
      <div class="hidden-sm-and-down">
        <v-btn text class="my-menu-button" to="/">Home</v-btn>
        <v-btn text class="my-menu-button" to="/projects">Projects</v-btn>
        <v-btn text class="my-menu-button" to="/about">About us</v-btn>
        <v-btn text class="my-menu-button" to="/contact">Contact</v-btn>
      </div>
    </v-app-bar>
    <!-------------------------------Content----------------------------------->
    <v-content>
      <nuxt />
    </v-content>
    <!-------------------------------Footer----------------------------------->
    <v-footer dark padless>
      <v-card flat tile class="text-center flex" color="primary">
        <v-card-title class="justify-center">
          <span class="subtitle-1">
             Get connected with us on social media!
          </span>
          <div class="flex-grow-1"></div>
          <v-btn
            href="https://www.linkedin.com/in/anthony-puopolo-34550a29/"
            class="mx-3 my-icon"
            icon
            link
          >
            <v-icon size="24px">mdi-linkedin-box</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="accent">
          <span>
            Designed by
            <a href="https://github.com/solazio" class="my-link">Designaza</a>
            | &copy;{{ new Date().getFullYear() }} APC Consulting
          </span>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          title: 'Home',
          to: '/'
        },
        {
          title: 'Projects',
          to: '/projects'
        },
        {
          title: 'About us',
          to: '/about'
        },
        {
          title: 'Contact',
          to: '/contact'
        }
      ]
    }
  }
}
</script>

<style scoped>
.my-title {
  font-weight: 400;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.my-menu-button {
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.my-footer-text {
  font-weight: 300;
  letter-spacing: 0.5px;
}
.my-link {
  text-decoration: none;
  color: #19bd9d;
  transition: color 300ms cubic-bezier(0.77, 0, 0.175, 1);
}
.my-link:hover {
  color: #e92973;
}
.my-icon {
  border: 1px solid transparent;
  transition: border-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.my-icon:hover {
  border-color: white;
}
</style>