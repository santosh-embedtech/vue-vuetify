<template>
  <v-app>
    <v-app-bar app  elevation="0">
      <v-app-bar-nav-icon ></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon @click="$vuetify.theme.dark = !$vuetify.theme.dark"
          >mdi-theme-light-dark</v-icon
        >
      </v-btn>

      <v-badge content="1" value="1" color="red" overlap>
        <v-icon> mdi-bell </v-icon>
      </v-badge>
      <v-divider class="mx-4" vertical></v-divider>

      <v-menu offset-y rounded>
        <template v-slot:activator="{ on, attrs }">
          <v-avatar color="red" size="34" v-bind="attrs" v-on="on">
            <span class="white--text text-h5">AD</span>
          </v-avatar>
        </template>
        <v-list dense>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Application log</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <!-- <router-view></router-view> -->
        <slot />
      </v-container>
    </v-main>

    <!-- <v-footer app> </v-footer> -->
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({

  }),
};
</script>
