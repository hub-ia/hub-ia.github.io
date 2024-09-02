
<template>
  <v-app>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        permanent
      >
        <template v-slot:prepend>
          <v-list-item
            lines="two"
            prepend-avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8G-o9j-BQBaiE2RNLpb1O-S6IDRXeisWfGg&s"
            title="Menu"
            ></v-list-item>
          </template>
          <!-- subtitle="Logged in" -->

        <v-divider></v-divider>
        <v-list
          density="compact"
          nav
        >
          <v-list-item to="/" prepend-icon="mdi-view-dashboard" :title="$t('home')" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
          <v-list-item prepend-icon="mdi-brain" title="test1" value="ghost"></v-list-item>
          <v-list-item prepend-icon="mdi-domain" title="test2" value="domain"></v-list-item>
          <v-list-item to="a" prepend-icon="mdi-message-text" title="Internacionalizacion" value="textMessage"></v-list-item>
          <v-list-item to="b" prepend-icon="mdi-dialpad" title="modal" value="dialpad"></v-list-item>
          <v-list-item to="test" prepend-icon="mdi-email" title="test4" value="email"></v-list-item>
          <v-list-item to="search"  prepend-icon="mdi-call-split" title="buscador" value="callSplit"></v-list-item>
          <v-list-item to="test"  prepend-icon="$vuetify" title="test5" value="vue"></v-list-item>
          <v-list-item to="test"  prepend-icon="$vuetify-outline" title="test6" value="vue-shadow"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar
        prominent
        flat
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        &nbsp;
        &nbsp;

        <v-toolbar-title>
          <v-icon icon="mdi-brain" />
          {{$t('title-main')}}</v-toolbar-title>

        <!-- <v-spacer></v-spacer> -->

        <template v-if="$vuetify.display.smAndUp">
        </template>
        <!-- modal inicio         -->
        <v-dialog max-width="500">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn
              v-bind="activatorProps"
              icon="mdi-magnify"
              variant="flat"
            ></v-btn>
            <!-- color="surface-variant" -->
          </template>

          <template v-slot:default="{ isActive }">
            <v-card title="Buscador">
              <!-- <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </v-card-text> -->
              <template v-slot:text>
                <v-text-field
                  v-model="search"
                  label="Search"
                  prepend-inner-icon="mdi-magnify"
                  variant="outlined"
                  hide-details
                  single-line
                ></v-text-field>
              </template>

              <v-data-table
                :headers="headers"
                :items="desserts"
                :search="search"
                :hide-default-header="true"
                :hide-default-footer="true"
                items-per-page="20"
              ></v-data-table>
              <!-- <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  text="Close Dialog"
                  @click="isActive.value = false"
                ></v-btn>
              </v-card-actions> -->
            </v-card>
          </template>
        </v-dialog>


        <!-- modal end         -->
        <div @click="$i18n.locale=='es'?$i18n.locale='en':$i18n.locale='es'">
          {{$i18n.locale}}
          <v-btn icon="mdi-translate" variant="text" >
          </v-btn>
        </div>
        <!-- "v-if"="$vuetify.display.mdAndUp" -->
        <v-btn icon="mdi-theme-light-dark" variant="text" @click="changeTheme"></v-btn>
        <!-- <v-btn icon="mdi-dots-vertical" variant="text"></v-btn> -->
      </v-app-bar>
      <v-main>
        <router-view />
      </v-main>
    </v-layout>
    <AppFooter />
  </v-app>
</template>
<script setup>
  import { useTheme } from 'vuetify'
  import { ref } from 'vue'
  const theme = useTheme()
  const changeTheme = ()=>{
    if(theme.global.name.value == 'myCustomLightTheme'){
      theme.global.name.value = 'dark'

    }else if(theme.global.name.value == 'dark'){
      theme.global.name.value = 'light'
    }else{
      theme.global.name.value = 'myCustomLightTheme'
    }
  }
  const drawer = ref(false)
  const search= ref('')
  const headers=ref([
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Dessert (100g serving)',
          },
          { key: 'calories', title: 'Calories' },
          { key: 'fat', title: 'Fat (g)' },
          { key: 'carbs', title: 'Carbs (g)' },
          { key: 'protein', title: 'Protein (g)' },
          { key: 'iron', title: 'Iron (%)' },
        ])
  const desserts=([
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: 1,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: 1,
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: 7,
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: 8,
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: 16,
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: 0,
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: 2,
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: 45,
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: 22,
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: 6,
          },
        ])
</script>
