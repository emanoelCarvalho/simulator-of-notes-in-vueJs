<template id="menu">
  <div class="container">
    <h1 class="text-center">Simulator Notes</h1>
    <div class="text-center">
      <button @click="showAritmetica" class="btn btn-success m-2">Aritmética</button>
      <button @click="showPonderada" class="btn btn-primary m-2">Ponderada</button>
    </div>

    <div v-if="selectedOption === 'ponderada'" class="mt-4">
      <Ponderada />
    </div>

    <div v-if="selectedOption === 'aritmetica'" class="mt-4">
      <Aritmetica />
    </div>
  </div>
</template>

<script>
import Ponderada from './Ponderada.vue'
import Aritmetica from './Aritmetica.vue'

export default {
  components: {
    Ponderada,
    Aritmetica
  },
  data() {
    return {
      selectedOption: ''
    }
  },
  methods: {
    showAritmetica() {
      this.selectedOption = 'aritmetica';
      menu.style.visibility = 'hidden';
    },
    showPonderada() {
      this.selectedOption = 'ponderada';
    }
  }
}
</script>

<style scoped>
.container {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f1f1f1;
  padding: 20px;
  text-align: center;
}

.btn {
  font-size: 16px;
}

.m-2 {
  margin: 4px;
}

.mt-4 {
  margin-top: 16px;
}
</style>
