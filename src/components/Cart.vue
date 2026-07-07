<script setup>
import { useCartStore } from "../stores/cart";
import { useRouter } from "vue-router";

const cart = useCartStore();
const router = useRouter();


function finalizarPedido() {
  if (cart.items.length === 0) return;

  router.push("/checkout");
}
</script>

<template>
    <div class="cart">

        <h2>🛒 Pedido</h2>

        <div v-if="cart.items.length">

            <div class="item" v-for="item in cart.items" :key="item.id">

                <div>

                    <strong>{{ item.name }}</strong>

                    <div class="quantity">

                        <button @click="cart.decrease(item.id)">
                            −
                        </button>

                        <span>{{ item.quantity }}</span>

                        <button @click="cart.increase(item.id)">
                            +
                        </button>

                    </div>

                    <p>
                        R$ {{ (item.price * item.quantity).toFixed(2) }}
                    </p>

                </div>

                <button @click="cart.removeProduct(item.id)">
                    ❌
                </button>

            </div>

            <hr>

            <h3>
                Total:
                R$ {{ cart.total.toFixed(2) }}
            </h3>

            <button class="finish" @click="finalizarPedido">
                Finalizar Pedido
            </button>

        </div>

        <p v-else>
            Carrinho vazio
        </p>

    </div>
</template>


<style scoped>
.cart {
    width: 320px;
    background: white;
    padding: 25px;
    box-shadow: -5px 0 15px rgba(0, 0, 0, .1);
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
.quantity{
    display:flex;
    align-items:center;
    gap:10px;
    margin:10px 0;
}

.quantity button{
    width:32px;
    height:32px;
    border:none;
    border-radius:50%;
    background:#ffbc0d;
    cursor:pointer;
    font-size:18px;
    font-weight:bold;
}

.quantity span{
    font-size:18px;
    font-weight:bold;
}
</style>