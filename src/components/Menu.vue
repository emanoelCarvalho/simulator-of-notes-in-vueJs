<template id="menu">
  <div class="container">
    <h1 class="text-center">Simulator Notes</h1>
    <div class="text-center">
      <button v-if="showMenu" @click="showAritmetica" class="btn btn-success m-2">Aritmética</button>
      <button v-if="showMenu" @click="showPonderada" class="btn btn-primary m-2">Ponderada</button>
    </div>

    <div v-if="selectedOption === 'ponderada'" class="mt-4">

      <Ponderada />
    </div>

    <div v-if="selectedOption === 'aritmetica'" class="mt-4">
      <Aritmetica />
    </div>
    <button v-if="!showMenu" @click="voltarAoMenu" class="btn btn-danger m-2">Voltar ao menu</button>
  </div>
</template>

<script>
import Ponderada from './Ponderada.vue'
import Aritmetica from './Aritmetica.vue'
import swal from 'sweetalert'

export default {
  components: {
    Ponderada,
    Aritmetica
  },
  data() {
    return {
      selectedOption: '',
      showMenu: true 
    }
  },
  methods: {
    showAritmetica() {
      swal('Atenção, no campo de notas, adicione os valores separados por vírgula')
      this.selectedOption = 'aritmetica';
      this.showMenu = false; 
    },
    showPonderada() {
      swal('Atenção, no campo de notas e no de pesos, adicione os valores separados por vírgula')
      this.selectedOption = 'ponderada';
      this.showMenu = false;
    },
    voltarAoMenu() {
      this.selectedOption = 'menu';
      this.showMenu = true;
    }
  }
}
</script>

<style scoped>
.container {
  font-family: Arial, Helvetica, sans-serif;
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
