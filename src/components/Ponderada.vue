<template>
    <div>
        <h1>Média ponderada</h1>
        <p>Insira as notas e os pesos das notas para calcular a média ponderada.</p>
        <p>Nome do aluno: {{ name }}</p>
        <p>Pesos: {{ pesos.join(', ') }}</p>
        <p>Notas: {{ notas.join(', ') }}</p>
        <p>Média: {{ media }}</p>

        <div>
            <button @click="colherName">Inserir nome</button>
            <button @click="colherPesos">Colher pesos</button>
            <button @click="colherNotas">Colher notas</button>
            <button @click="calcularMedia">Calcular média</button>
            <button @click="isAprovado">Aprovado?</button>
            <button @click="clearAll">Limpar tudo</button>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Ponderada',

    data() {
        return {
            notas: [],
            pesos: [],
            media: 0,
            name: ''
        }
    },
    methods: {
        colherName() {
            this.name = prompt('Insira o nome do aluno')
        },
        colherNotas() {
            let nota = parseFloat(prompt('Insira a nota (ou digite "stop" para encerrar a coleta de notas):'))
            while (!isNaN(nota)) {
                this.notas.push(nota)
                nota = parseFloat(prompt('Insira a próxima nota (ou digite "stop" para encerrar a coleta de notas):'))
            }
        },
        colherPesos() {
            let peso = parseFloat(prompt('Insira o peso da nota: ' + (this.pesos.length + 1)))
            this.pesos.push(peso)
        },
        calcularMedia() {
            let soma = 0
            let somaPesos = 0
            for (let i = 0; i < this.notas.length; i++) {
                soma += this.notas[i] * this.pesos[i]
                somaPesos += this.pesos[i]
            }
            this.media = soma / somaPesos

            alert('A média de ' + this.name + ' é: ' + this.media.toFixed(2))
        },
        isAprovado() {
            setTimeout(() => {
                if (this.media >= 6) {
                    alert(this.name + ' foi aprovado!')
                } else {
                    alert(this.name + ' foi reprovado!')
                }
            }, 1000)
        },

        clearAll() {
            this.notas = []
            this.pesos = []
            this.media = 0
            this.name = ''
        }
    }
}
</script>
  
<style>
button {

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