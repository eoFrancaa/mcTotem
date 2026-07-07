<script setup>
import { useCartStore } from '../stores/cart'
import { useRouter } from 'vue-router'

const cart = useCartStore()
const router = useRouter()

function confirmarPedido() {
  alert('✅ Pedido realizado com sucesso!')

  cart.items = []

  router.push('/success');
}
</script>

<template>
  <div class="checkout">
    <h1>Resumo do Pedido</h1>

    <div v-for="item in cart.items" :key="item.id" class="item">
      <span>{{ item.name }}</span>

      <span>{{ item.quantity }}x</span>

      <span> R$ {{ (item.price * item.quantity).toFixed(2) }} </span>
    </div>

    <hr />

    <h2>Total: R$ {{ cart.total.toFixed(2) }}</h2>

    <button @click="confirmarPedido">Confirmar Pedido</button>
  </div>
</template>

<style scoped>
.checkout {
  max-width: 700px;
  margin: 40px auto;
  padding: 30px;
  background: white;
  border-radius: 15px;
}

.item {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}

button {
  width: 100%;
  padding: 15px;
  border: none;
  background: #ffbc0d;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
}
</style>
