<template>
  <main>
    <ul>
      <li>
        <img src="@/assets/pizza-portu.png" alt="pizza chocolate"/>
        <strong>Portuguesa</strong>
        <span>R$100,00</span>
        <button>
          <div>🛒 0</div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img src="@/assets/pizza-choco.png" alt="pizza chocolate"/>
        <strong>Chocolate</strong>
        <span>R$100,00</span>
        <button>
          <div>🛒 0</div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img src="@/assets/pizza-portu.png" alt="pizza chocolate"/>
        <strong>Portuguesa</strong>
        <span>R$100,00</span>
        <button>
          <div>🛒 0</div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img src="@/assets/pizza-choco.png" alt="pizza chocolate"/>
        <strong>Chocolate</strong>
        <span>R$100,00</span>
        <button>
          <div>🛒 0</div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img src="@/assets/pizza-choco.png" alt="pizza chocolate"/>
        <strong>Chocolate</strong>
        <span>R$100,00</span>
        <button>
          <div>🛒 0</div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img src="@/assets/pizza-portu.png" alt="pizza chocolate"/>
        <strong>Portuguesa</strong>
        <span>R$40,00</span>
        <button>
          <div>🛒 0</div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img src="@/assets/pizza-portu.png" alt="pizza chocolate"/>
        <strong>Portuguesa</strong>
        <span>R$40,00</span>
        <button>
          <div>🛒 0</div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ul>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Index',

});
</script>

<style lang="scss" scoped>
main {
  padding: 2rem;
  max-width: 850px;
  margin: 50px auto;
  border: 1px dashed #ffc9c9;
  border-radius: 5px;

  ul {
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 2rem;
    column-gap: 2rem;
    //same as gap: 2rem;
    list-style: none;

    li {
      display: flex;
      flex-direction: column;
      background: #FFF;
      border-radius: 10px;

      img {
        align-self: center;
        max-width: 200px;
      }

      strong {
        line-height: 20px;
        color:#006491;
        margin: 10px 0 0 0;
      }

      > span {
        line-height: 20px;
        color:#ac0000;
        margin: 10px 0 0 0;
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

</style>
