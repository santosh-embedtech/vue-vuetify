<template>
  <v-app>
            <v-navigation-drawer app :mini-variant.sync="mini">
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img
              src="https://randomuser.me/api/portraits/women/85.jpg"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Sandra Adams
            </v-list-item-title>
            <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>
            <router-link to="/">Home</router-link>
          </v-list-item-title>
        </v-list-item>

        <v-list-group :value="true" prepend-icon="mdi-account-circle">
          <template v-slot:activator>
            <v-list-item-title>Users</v-list-item-title>
          </template>

          <v-list-group :value="true" no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Admin</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item link>
              <v-list-item-title
                ><router-link to="/about">Manager</router-link>
              </v-list-item-title>

              <v-list-item-icon>
                <v-icon>mdi-account-multiple-outline</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <!-- <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Actions</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title, icon], i) in cruds" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group> -->
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dense elevation="0">
      <v-app-bar-nav-icon @click="mini = !mini"></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon @click="$vuetify.theme.dark = !$vuetify.theme.dark"
          >mdi-theme-light-dark</v-icon
        >
      </v-btn>
      
      <v-badge content="1" value="1" color="red" overlap>
        <v-icon > mdi-bell </v-icon>
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
    mini: false,
    // admins: [
    //   ["Management", "mdi-account-multiple-outline"],
    //   ["Settings", "mdi-cog-outline"],
    // ],
    // cruds: [
    //   ["Create", "mdi-plus-outline"],
    //   ["Read", "mdi-file-outline"],
    //   ["Update", "mdi-update"],
    //   ["Delete", "mdi-delete"],
    // ],
  }),
};
</script>
