<template>
  <div id="app">
    <navbars />
    <footers />
  </div>
</template>

<script>
import Footers from './components/Footer-component.vue';
import Navbars from './components/Navbar-component.vue';

export default {
  name: 'App',
  components: {
    Footers,
    Navbars
  }
}

</script>