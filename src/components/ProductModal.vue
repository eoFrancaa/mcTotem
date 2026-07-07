  <script setup>
  import { ref, computed } from 'vue'
  import { useCartStore } from '../stores/cart'

  const cart = useCartStore()

  const props = defineProps({
    product: Object,
  })

  const emit = defineEmits(['close'])

  const tamanho = ref('Médio')

  const adicionais = ref([])

  const total = computed(() => {
    let valor = props.product.price

    if (tamanho.value === 'Grande') valor += 6
    if (tamanho.value === 'Pequeno') valor -= 2

    adicionais.value.forEach((nome) => {
      const adicional = props.product.options.adicionais.find(
        (a) => a.nome === nome
      )

      if (adicional) {
        valor += adicional.preco
      }
    })

    return valor
  })

  function adicionarAoCarrinho() {
  cart.addProduct({
    ...props.product,
    price: total.value,
    tamanho: tamanho.value,
    adicionais: [...adicionais.value],
  })

  emit("close")
}
</script>

  <template>
    <div class="overlay">
      <div class="modal">
        <h2>{{ product.name }}</h2>

        <div>
          <h3>Escolha o tamanho</h3>

          <label v-for="t in product.options.tamanhos" :key="t">
            <input type="radio" :value="t" v-model="tamanho" />

            {{ t }}
          </label>
        </div>
        <div>
          <h3>Adicionais</h3>

          <label v-for="adicional in product.options.adicionais" :key="adicional.nome">
            <input type="checkbox" :value="adicional.nome" v-model="adicionais" />

            {{ adicional.nome }}

            (+R$ {{ adicional.preco.toFixed(2) }})
          </label>
        </div>

        <hr />

        <h2>Total: R$ {{ total.toFixed(2) }}</h2>

        <button class="add" @click="adicionarAoCarrinho">Adicionar ao Pedido</button>

        <button class="cancel" @click="emit('close')">Cancelar</button>
      </div>
    </div>
  </template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  width: 450px;
  background: white;
  border-radius: 20px;
  padding: 30px;
}

label {
  display: block;
  margin: 12px 0;
  font-size: 18px;
}

.add {
  width: 100%;
  margin-top: 20px;
  padding: 15px;
  background: #ffc72c;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
}

.cancel {
  width: 100%;
  margin-top: 10px;
  padding: 15px;
  background: #ddd;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
</style>
