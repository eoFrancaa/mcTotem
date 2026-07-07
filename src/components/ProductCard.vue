<script setup>
import { ref } from "vue";
import ProductModal from "./ProductModal.vue";

const props = defineProps({
  product: Object,
});

const mostrarModal = ref(false);

function abrirProduto() {
  mostrarModal.value = true;
}
</script>

<template>
  <div class="card">
    <img :src="product.image" :alt="product.name" />

    <h3>{{ product.name }}</h3>

    <p>R$ {{ product.price.toFixed(2) }}</p>

    <button @click="abrirProduto">
      Adicionar
    </button>

    <ProductModal
      v-if="mostrarModal"
      :product="product"
      @close="mostrarModal = false"
    />
  </div>
</template>

<style scoped>
.card{
    width:100%;
    max-width:250px;
    margin:auto;
    background:white;
    border-radius:15px;
    padding:15px;
}
.card img{
    width:100%;
    height:180px;
    object-fit:contain;
    border-radius:12px;
    padding:15px;
}

img {
  width: 100%;
  border-radius: 10px;
}

button {
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  background: #ffbc0d;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}
</style>
