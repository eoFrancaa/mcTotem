<script setup>
defineProps({
  categoriaSelecionada: String,
})

const emit = defineEmits(['mudarCategoria'])

const categorias = ['Hambúrgueres', 'Acompanhamentos', 'Bebidas', 'Sobremesas']
</script>

<template>
  <aside class="menu">
    <h2>🍟 McTotem</h2>

    <button
      v-for="categoria in categorias"
      :key="categoria"
      @click="emit('mudarCategoria', categoria)"
      :class="{ active: categoriaSelecionada === categoria }"
    >
      {{ categoria }}
    </button>
  </aside>
</template>

<style scoped>
.menu {
  width: 270px;
  background: #da291c;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  gap: 15px;
}

.menu h2 {
  color: white;
  text-align: center;
  margin-bottom: 30px;
  font-size: 32px;
}

.menu button {
  border: none;
  background: white;
  padding: 18px;
  border-radius: 15px;
  cursor: pointer;
  font-size: 18px;
  transition: 0.2s;
}

.menu button.active {
  background: #ffc72c;
  color: #000;
  font-weight: bold;
}

.menu button:hover {
  transform: translateX(8px);
}
@media (max-width: 768px) {
  .menu {
    width: 100%;
    flex-direction: row;
    overflow-x: auto;
    padding: 10px;
  }

  .menu h2 {
    display: none;
  }

  .menu button {
    flex: 0 0 auto;
    margin-right: 10px;
  }
}
</style>
