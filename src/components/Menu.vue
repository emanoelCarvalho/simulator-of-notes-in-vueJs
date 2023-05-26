<template id="tela-geral">
    <div>
        <h1>Simulator Notes</h1>
        <button @click="showAritmetica" id="aritmetica">Aritmética</button>
        <button @click="showPonderada" id="ponderada">Ponderada</button>


        <div v-if="selectedOption === 'ponderada'">
            <Ponderada />
        </div>

        <div v-if="selectedOption === 'aritmetica'">
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
        },
        showPonderada() {
            this.selectedOption = 'ponderada';
        }
    }
}
</script>
<style>
template {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
}

#tela-geral {
    background-color: #f1f1f1;
    padding: 20px;
    text-align: center;

}
#aritmetica {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}

#ponderada {
    background-color: #008CBA;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
</style>