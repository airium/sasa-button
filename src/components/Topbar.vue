<template>
  <v-app-bar
    :collapse-on-scroll="$vuetify.breakpoint.smAndDown"
    fixed
    :color="night"
    dark
    :elevate-on-scroll="$vuetify.breakpoint.mdAndUp"
  >
    <v-menu transition="slide-y-transition" bottom offset-y>
      <template v-slot:activator="{ on: menu }">
        <v-app-bar-nav-icon
          v-on="menu"
          v-show="$vuetify.breakpoint.smAndDown"
        ></v-app-bar-nav-icon>
      </template>
      <v-list>
        <v-list-item
          @click="
            See('https://www.youtube.com/channel/UCEAYn1JzHW7BGOaaDWDtqnQ')
          "
        >
          <v-list-item-title>
            <v-icon left color="red">mdi-youtube</v-icon>shanoa channel
          </v-list-item-title>
        </v-list-item>
        <v-list-item @click="See('https://twitter.com/chatnoir_Ice')">
          <v-list-item-title>
            <v-icon left color="blue">mdi-twitter</v-icon>@chatnoir_Ice
          </v-list-item-title>
        </v-list-item>
        <v-list-item @click="See('https://space.bilibili.com/1612112')">
          <v-list-item-title>
            <v-icon left color="#f69" class="iconfont icon-bilibili"></v-icon
            >夏诺雅_shanoa
          </v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <!-- <v-list-item @click="See('https://github.com/Nyaasu66/sasa-button')">
          <v-list-item-title>
            <v-icon left color="black">mdi-github</v-icon>
            {{$t("ui.helpdevelope")}}
          </v-list-item-title>
        </v-list-item> -->
      </v-list>
    </v-menu>
    <v-toolbar-title>{{ $t("ui.title") }}</v-toolbar-title>
    <v-btn
      v-if="$vuetify.breakpoint.mdAndUp"
      class="ml-4 text-capitalize"
      color="red"
      @click="See('https://www.youtube.com/channel/UCEAYn1JzHW7BGOaaDWDtqnQ')"
    >
      <v-icon left>mdi-youtube</v-icon>shanoa channel
    </v-btn>
    <v-btn
      v-if="$vuetify.breakpoint.mdAndUp"
      class="ml-4 text-lowercase"
      color="blue"
      @click="See('https://twitter.com/chatnoir_Ice')"
    >
      <v-icon left>mdi-twitter</v-icon>@chatnoir_Ice
    </v-btn>
    <v-btn
      v-if="$vuetify.breakpoint.mdAndUp"
      class="ml-4 text-lowercase"
      color="#f69"
      @click="See('https://space.bilibili.com/1612112')"
    >
      <v-icon left class="iconfont icon-bilibili"></v-icon>夏诺雅_shanoa
    </v-btn>
    <v-spacer></v-spacer>
    <!-- <v-btn
      v-if="$vuetify.breakpoint.mdAndUp"
      @click="See('https://github.com/Nyaasu66/sasa-button')"
    >
      <v-icon left>mdi-github</v-icon>
      {{$t("ui.helpdevelope")}}
    </v-btn> -->
    <v-btn v-on="on" fab icon @click="DarkMode()">
      <v-icon>{{ darkmodeicon }}</v-icon>
    </v-btn>
    <v-menu transition="slide-y-transition" bottom offset-y>
      <template v-slot:activator="{ on: menu }">
        <v-fab-transition>
          <v-btn v-on="menu" fab icon>
            <v-icon>mdi-earth</v-icon>
          </v-btn>
        </v-fab-transition>
      </template>
      <v-list>
        <v-list-item
          v-for="(lang, i) in langs"
          :key="i"
          :disabled="!lang.isready"
          @click="ChangeLang(lang.src)"
        >
          <v-list-item-title>{{ lang.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    langs: [
      { title: "简体中文", src: "zhHans", isready: true },
      { title: "English", src: "en", isready: true },
      { title: "日本語", src: "ja", isready: true },
    ],
  }),
  methods: {
    ChangeLang(e) {
      this.$i18n.locale = e;
      this.$cookies.set("Lang", e);
    },
    DarkMode() {
      this.$store.commit("change_dark_mode");
      this.$vuetify.theme.dark = this.$store.state.dark_mode;
    },
    See(e) {
      window.location.href = e;
    },
  },
  computed: {
    darkmodeicon: {
      get: function () {
        return this.$store.state.dark_icon;
      },
    },
    night: {
      get: function () {
        if (this.$vuetify.theme.dark) {
          return "grey darken-4";
        } else {
          return "primary";
        }
      },
    },
  },
};
</script>

<style>
@font-face {
  font-family: "iconfont";
  src: url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMQAAsAAAAABtwAAALBAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAqBZIFkATYCJAMICwYABCAFhG0HMhsMBsiuMYUx9tSIIJaJsfEd7vGaTncNAnkefwTV2r89e/sJQBGFNaAiUCkPLAmc/GhEwp519PvfuUzveICWMgfE7YDop4AvzcghanQE7oza2KFw6wGztX/ZU+JRD4DNkdULLHkVA+uU/+Ca+iuggeQBzSmj+HGA49YBRTW18AaEG6aXr6E8iNsJVOuXijvGN3cjn4z3C8RtWZxAvpxLllm0UiivmZr745BbZXqWnvDG/T7+mQsfSVmB5528VTeNKn8ScSyWGjYI9nwGsFkUmIVk4mxt6DinYESn6pDLMLSv7OCnNxqx1z9PlOOZtaAXsu6JrTi3mplAhvXHIZdGfYo82hgaej+o67bd55PdQb03bz+Z6ggKfHz7KH36dM7Ol88vwZfPFxoNu9gN59O9moq5O7TnoCe92Avu6W5dZngPd7S74vg6oKNgoTDh+MOWPGGooLYgqrd8XIglMXziefRrRhcXmOBjZv1V7lKXosVAzOb+xZuc9W32XSjFGK8ZULRmpHcyTWr5kE2VkBKPyJXOxf+7nyf+Nab0vy84gx9143j9LEjlXZiDv6nIpS1Ins/lwZSBWAiT2JMaEjCrGiXc1uxvrKzt1g2hMsdmkFTog0KlUUwmzEKZGgtQrtJBqDZDmF2jBeUUuQrT1gCERo+Q1NuDQqNnTCb8Qpl2/1CuMZxQ7XxEL1ljPOSgGgoTDKbx5AKWp0yDSC0LirI7QZzRJmiW60i9QG3Zi7PSM4tRAQygc4ywZ8Vsxggm1NQxD3YDTTOxRU0Fpli6xJhVnJFB6u6UPmXqKMhRFJjAgGnYpAWYbIrJQExxJqj0/U5ANEMzgbagevS9AGWTG8eypMvsgRFERi/UvdximyXKxjAERlAmHcaDTkCjMWFWfScFmMKkk0YELMUyRCHSV5S+vkT/uiVQjctTiORC5TVZk5USIQAAAA==")
    format("woff2");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 20px !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-bilibili:before {
  content: "\e63d";
}
</style>