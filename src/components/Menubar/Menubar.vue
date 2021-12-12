<template>
  <header>
    <nav>
      <ul>
        <li>
          <img src="@/assets/pizza-ico-256px.png" />
        </li>
        <li class="list-nav-items">
          About
        </li>
        <li class="list-nav-items">
          Order online
        </li>
        <li class="list-nav-items">
          Promos
        </li>
        <li class="list-nav-items list-nav-login">
          💻 Login
        </li>
        <li class="list-nav-items list-nav-cart">
          <div class="list-cart-name">Cart <span class="list-cart-quantity">{{cart}}</span></div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },

});
</script>

<style lang="scss">
  @import 'styles.scss';
</style>
