<template>
  <div id="nav">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>

import Footer from './layout/Footer.vue'
import Navbar from "./layout/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },
};
</script>

<style>
:root {
  --dark-red: #fbe3b6;
  --black-bg: #ffffff;
  --yellow: #f2a922;
  --yellow2: #facb75;
  --dark-orange: #d98014;
  --light-red-orange: #d9501e;
}

* {
  margin: 0;
  padding: 0;
  border: none;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}

html {
  background: var(--black-bg);
}
</style>
