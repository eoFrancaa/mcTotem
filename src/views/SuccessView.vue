<script setup>
import { useRouter } from "vue-router";
import { useCartStore } from "../stores/cart";

const router = useRouter();
const cart = useCartStore();

function novoPedido() {
  cart.$reset();
  router.push("/");
}
</script>

<template>
  <div class="success">
    <div class="card">
      <div class="icon">✅</div>

      <h1>Pedido realizado!</h1>

      <p>Seu pedido foi enviado para a cozinha.</p>

      <p>Aguarde a chamada do número.</p>

      <button @click="novoPedido">
        Novo Pedido
      </button>
    </div>
  </div>
</template>

<style scoped>
.success {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
}

.card {
  width: 500px;
  background: white;
  border-radius: 20px;
  padding: 50px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,.15);
}

.icon {
  font-size: 70px;
}

h1 {
  margin: 20px 0;
}

p {
  color: #666;
  margin: 10px 0;
}

button {
  margin-top: 30px;
  width: 100%;
  padding: 16px;
  border: none;
  background: #ffbc0d;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}
</style>