<script setup>
import { useRouter } from "vue-router";
import { useCartStore } from "../stores/cart";

const router = useRouter();
const cart = useCartStore();

const numeroPedido = Math.floor(Math.random() * 900 + 100);

function novoPedido() {
  cart.$reset();
  router.push("/");
}
</script>
<template>
  <div class="success">

    <div class="card">

      <div class="check">✔</div>

      <h1>Pedido realizado!</h1>

      <p class="msg">
        Seu pedido foi enviado para a cozinha.
      </p>

      <div class="numero">

        <span>Pedido</span>

        <h2>A-{{ numeroPedido }}</h2>

      </div>

      <p class="aguarde">
        Aguarde a chamada no painel.
      </p>

      <button @click="novoPedido">
        Fazer novo pedido
      </button>

    </div>

  </div>
</template>

<style scoped>
.success{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#f5f5f5;
}

.card{
    width:500px;
    background:white;
    border-radius:25px;
    padding:50px;
    text-align:center;
    box-shadow:0 15px 35px rgba(0,0,0,.12);
}

.check{
    width:90px;
    height:90px;
    margin:auto;
    border-radius:50%;
    background:#00b341;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:42px;
}

h1{
    margin-top:25px;
}

.msg{
    color:#666;
    margin-bottom:30px;
}

.numero{
    background:#fff4cf;
    border-radius:20px;
    padding:25px;
    margin:25px 0;
}

.numero span{
    color:#666;
}

.numero h2{
    margin-top:10px;
    font-size:52px;
    color:#d90000;
    letter-spacing:5px;
}

.aguarde{
    color:#666;
}

button{
    margin-top:35px;
    width:100%;
    padding:18px;
    border:none;
    border-radius:12px;
    background:#ffbc0d;
    font-size:18px;
    font-weight:bold;
    cursor:pointer;
}

</style>