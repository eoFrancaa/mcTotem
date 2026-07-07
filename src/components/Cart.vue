<script setup>
import { useCartStore } from '../stores/cart'
import { useRouter } from 'vue-router'

const cart = useCartStore()
const router = useRouter()

function finalizarPedido() {
  if (cart.items.length === 0) return

  router.push('/checkout')
}
</script>

<template>
  <div class="cart">
    <h2>🛒 Pedido</h2>

    <div v-if="cart.items.length">
      <div class="item" v-for="item in cart.items" :key="item.id">
        <div>
          <strong>{{ item.name }}</strong>
          <small>{{ item.tamanho }}</small>

          <div class="extras" v-if="item.adicionais && item.adicionais.length">
            <span v-for="adicional in item.adicionais" :key="adicional">
              {{ adicional }}
            </span>
          </div>

          <div class="quantity">
            <button @click="cart.decrease(item.id)">−</button>

            <span>{{ item.quantity }}</span>

            <button @click="cart.increase(item.id)">+</button>
          </div>

          <p>R$ {{ (item.price * item.quantity).toFixed(2) }}</p>
        </div>

        <button @click="cart.removeProduct(item.id)">❌</button>
        <!-- <pre>{{ item }}</pre> -->
      </div>

      <hr />

      <h3>Total: R$ {{ cart.total.toFixed(2) }}</h3>

      <button class="finish" @click="finalizarPedido">Finalizar Pedido</button>
    </div>

    <p v-else>Carrinho vazio</p>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 20px 0;
}

.item>div:first-child {
  flex: 1;
}

.item strong {
  display: block;
  font-size: 18px;
  margin-bottom: 3px;
}

.item small:first-of-type {
  display: block;
  color: #666;
  font-size: 14px;
  margin-bottom: 8px;
}

.extras {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 10px;
}

.extras span,
.extras small {
  background: #ffe8a3;
  color: #6b4f00;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.quantity {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 12px 0;
}

.quantity button {
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  background: #ffbc0d;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
}

.quantity button:hover {
  background: #e0a800;
}

.quantity span {
  min-width: 20px;
  text-align: center;
  font-weight: bold;
}

.item p {
  font-size: 17px;
  font-weight: bold;
  margin-top: 8px;
}

.item>button {
  color: red;
  font-size: 22px;
  margin-left: 15px;
}

.cart {
  width: 320px;
  background: white;
  padding: 25px;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
}

.item button {
  border: none;
  background: none;
  cursor: pointer;
  font-size: 18px;
}

.finish {
  width: 100%;
  padding: 15px;
  border: none;
  background: #ffbc0d;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}

.quantity {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
}

.quantity button {
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  background: #ffbc0d;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
}

.quantity span {
  font-size: 18px;
  font-weight: bold;
}
</style>
