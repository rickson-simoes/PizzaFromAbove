<template>
  <Menubar/>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Menubar from './components/Menubar/Menubar.vue';

export default defineComponent({
  components: {
    Menubar,
  },
});
</script>

<style lang="scss">

</style>
