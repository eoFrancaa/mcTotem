<script setup>
import { ref, computed } from "vue";
import ProductCard from "../components/ProductCard.vue";
import Cart from "../components/Cart.vue";
import { products } from "../data/products";

const categoriaSelecionada = ref("Hambúrgueres");

const produtosFiltrados = computed(() => {
  return products.filter(
    produto => produto.category === categoriaSelecionada.value
  );
});
</script>

<template>
  <div class="container">

    <aside class="menu">

  <h2>🍟 McTotem</h2>

  <button @click="categoriaSelecionada='Hambúrgueres'" :class="{ active: categoriaSelecionada === 'Hambúrgueres' }">
    🍔 Hambúrgueres
  </button>

  <button @click="categoriaSelecionada='Acompanhamentos'" :class="{ active: categoriaSelecionada === 'Acompanhamentos' }">
    🍟 Acompanhamentos
  </button>

  <button @click="categoriaSelecionada='Bebidas'" :class="{ active: categoriaSelecionada === 'Bebidas' }">
    🥤 Bebidas
  </button>

  <button @click="categoriaSelecionada='Sobremesas'" :class="{ active: categoriaSelecionada === 'Sobremesas' }">
    🍦 Sobremesas
  </button>

</aside>

    <main class="content">

      <h1>Faça seu pedido</h1>

      <div class="products">

        <ProductCard
          v-for="product in produtosFiltrados"
          :key="product.id"
          :product="product"
        />

      </div>

    </main>
    <Cart />  

  </div>
</template>



<style scoped>
body{
    margin:0;
}

.container{
    display:flex;
    height:100vh;
    background:#f5f5f5;
}

.menu{
    width:270px;
    background:#DA291C;
    display:flex;
    flex-direction:column;
    padding:30px 20px;
    gap:15px;
}

.menu h2{
    color:white;
    text-align:center;
    margin-bottom:30px;
    font-size:32px;
}

.menu button{
    border:none;
    background:white;
    padding:18px;
    border-radius:15px;
    cursor:pointer;
    font-size:18px;
    transition:.2s;
}

.menu button.active{
    background:#FFC72C;
    color:#000;
    font-weight:bold;
}

.menu button:hover{
    transform:translateX(8px);
}

.content{
    flex:1;
    padding:30px;
    overflow:auto;
}

.content h1{
    text-align:center;
    margin-bottom:35px;
}

.products{
    display:grid;
    grid-template-columns:repeat(auto-fill,minmax(220px,1fr));
    gap:25px;
}
</style>