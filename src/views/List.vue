<template>
  <main>

    <h2 class="title-start-order"> START YOUR <span>ORDER</span> </h2>

    <ul>
      <li>
        <img src="@/assets/pizza-flavors/pizza-portuguese.png" alt="Cream cheese with chicken pizza" loading="lazy"/>
        <strong>Cream cheese with chicken</strong>
        <span>R$100,00</span>
        <button @click="add()">
          <div>🛒 0</div>

          <span>Add to the cart</span>
        </button>
      </li>
    </ul>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Index',
  methods: {
    add() {
      this.$store.commit('increment');

      console.log(this.$store.state.cart); // -> 1
    },
  },

});
</script>

<style lang="scss" scoped>
[buttonUnderMaintenance] {
  background: rgb(153, 153, 153);
  color: rgb(83, 83, 83);
  cursor: not-allowed;

  &:hover {
    background: rgb(59, 59, 59);
    color: rgb(0, 0, 0);
  }
}

.title-start-order {
  color: var(--blueDominos);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 20px;

  > span {
    color: #ac0000;
    margin-left: 0.50rem;
  }

  &::before,  &::after {
    content: " ";
    background-color: #dcdcdc;
    height: 2px;
    width: 70px;
    margin: 0 15px;
    display: flex;
  }
}

main {
  padding: 2rem;
  max-width: 750px;
  margin: 50px auto;
  border: 1px dashed #ffc9c9;
  border-radius: 5px;

  ul {
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2rem;
    column-gap: 2rem;
    //same as gap: 2rem;
    list-style: none;

    li {
      padding:10px;     display: flex;
      flex-direction: column;
      background: #FFF;
      border-radius: 10px;
      border: 1px solid rgb(255, 226, 226);

      img {
        align-self: center;
        max-width: 200px;
      }

      strong {
        line-height: 20px;
        color: var(--blueDominos);
        margin: 10px 5px;
      }

      > span {
        line-height: 20px;
        color:#ac0000;
        margin: 10px 5px;
      }

      button {
        color: white;
        background: #006491;
        border:0;
        border-bottom: 5px solid #ac0000;
        border-radius: 5px;
        padding: 10px;
        cursor: pointer;
        font-size: 1rem;

        display: flex;
        align-items: center;
        transition: background 0.2s;

        &:hover {
          background: #004869;
        }

        > span {
          margin-left: 10px;
        }

      }
    }
  }
}

@media all and (max-width:46.8em) {
  main {
    ul {
      grid-template-columns: repeat(2, 1fr);

      li{

        strong {
          font-size: 1.2rem;
        }

        > span {
          font-size: 1.2rem;

          margin-bottom: 10px;
        }

        button {
          font-size: 1.2rem;

          > span {
            flex: 1;
          }
        }
      }
    }
  }
}

</style>
