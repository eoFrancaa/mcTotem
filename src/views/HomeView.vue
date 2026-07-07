<script setup>
import { ref, computed } from 'vue'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard.vue'
import Cart from '../components/Cart.vue'
import CategoryBar from '../components/CategoryBar.vue'

const categoriaSelecionada = ref('Hambúrgueres')

const produtosFiltrados = computed(() =>
  products.filter(p => p.category === categoriaSelecionada.value)
)
</script>
<template>
 <div class="container">

  <CategoryBar
    :categoriaSelecionada="categoriaSelecionada"
    @mudarCategoria="categoriaSelecionada = $event"
  />

  <main class="content">

    <h1>{{ categoriaSelecionada }}</h1>

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
body {
  margin: 0;
}

.container {
  display: flex;
  height: 100vh;
  background: #f5f5f5;
}

.content {
  flex: 1;
  padding: 30px;
  overflow: auto;
}

.content h1 {
  text-align: center;
  margin-bottom: 35px;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 25px;
}
</style>
