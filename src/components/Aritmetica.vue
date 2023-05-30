<template>
  <div>
    <h1>Média Aritmética</h1>
    <p>Insira as notas para calcular a média aritmética.</p>
    <p>Nome do aluno: {{ name }}</p>
    <p>Notas: {{ notas.join(' ,') }}</p>
    <p>Média: {{ media }}</p>

    <div>
      <button @click="inserirName">Inserir nome</button>
      <button @click="colherNotas">Colher notas</button>
      <button @click="calcularMedia">Calcular média</button>
      <button @click="isAprovado">Aprovado?</button>
      <button @click="clearAll">Limpar tudo</button>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'Aritmetica',

  data() {
    return {
      notas: [],
      media: 0,
      name: ''
    }
  },

  methods: {

    inserirName() {
      this.name = prompt('Insira o nome do aluno')
    },

    colherNotas() {
      let nota = parseFloat(prompt('Insira a nota (ou digite "stop" para encerrar a coleta de notas):'))
      while (!isNaN(nota)) {
        this.notas.push(nota)
        nota = parseFloat(prompt('Insira a próxima nota (ou digite "stop" para encerrar a coleta de notas):'))
      }
    },

    calcularMedia() {
      let soma = 0
      for (let i = 0; i < this.notas.length; i++) {
        soma += this.notas[i]
      }
      this.media = soma / this.notas.length

      alert('A média de ' + this.name + ' é: ' + this.media.toFixed(2))
    },

    isAprovado() {
      setTimeout(() => {
        if (this.media >= 6) {
          alert(this.name + ' foi ' + ' aprovado!')
        } else {
          alert(this.name + ' foi' + ' reprovado!')
        }
      }, 1000)
    },

    clearAll() {
      this.notas = []
      this.media = 0
      this.name = ''
    }
  },
}
</script>
<style>
button{
  
    background-color:#008CBA;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;

}
</style>