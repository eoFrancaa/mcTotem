<script setup>
import { useCartStore } from "../stores/cart";

const cart = useCartStore();

const props = defineProps({
  product: Object
});

function add(){
  cart.addProduct(props.product);
}
</script>

<template>
  <div class="card">
    <img :src="product.image" :alt="product.name">

    <h3>{{ product.name }}</h3>

    <p>R$ {{ product.price.toFixed(2) }}</p>

    <button @click="add">Adicionar</button>
  </div>
</template>


<style scoped>
.card{
    width:220px;
    border-radius:15px;
    background:white;
    padding:15px;
    box-shadow:0 5px 15px rgba(0,0,0,.15);
    text-align:center;
}

img{
    width:100%;
    border-radius:10px;
}

button{
    width:100%;
    margin-top:10px;
    padding:10px;
    background:#ffbc0d;
    border:none;
    border-radius:8px;
    font-weight:bold;
    cursor:pointer;
}
</style>      