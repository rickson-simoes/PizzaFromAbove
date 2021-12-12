<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link :to="{name: 'List'}" rel="About-page">
            <img src="@/assets/pizza-ico-256px.png" />
          </router-link>
        </li>
        <li class="list-nav-items">
          <router-link :to="{name: 'About'}" rel="About-page">
            <span>About</span>
          </router-link>
        </li>
        <li class="list-nav-items">
          <a rel="Order-Online-page">
            <span>Order online</span>
          </a>
        </li>
        <li class="list-nav-items">
          <a rel="Promos-page">
            <span>Promos</span>
          </a>
        </li>
        <li class="list-nav-items list-nav-login">
          <a rel="Login-page">
            <span>💻 Login</span>
          </a>
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
