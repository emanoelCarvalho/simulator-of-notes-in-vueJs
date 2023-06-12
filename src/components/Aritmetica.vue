<template>
  <div class="container">
    <h1>Média Aritmética</h1>
    <p>Insira as notas para calcular a média aritmética.</p>
    <p>Matéria: {{ materia }}</p>
    <p>Nome do aluno: {{ name }}</p>
    <p>Notas: {{ notas.join(', ') }}</p>
    <p>Média: {{ media }}</p>

    <div class="d-flex justify-content-center mt-4">
      <button @click="inserirMateria" class="btn btn-primary mx-2">Inserir matéria</button>
      <button @click="inserirName" class="btn btn-primary mx-2">Inserir nome</button>
      <button @click="colherNotas" class="btn btn-primary mx-2">Colher notas</button>
      <button @click="calcularMedia" class="btn btn-primary mx-2">Calcular média</button>
      <button @click="clearAll" class="btn btn-danger mx-2">Limpar tudo</button>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'Aritmetica',

  data() {
    return {
      notas: [],
      media: '',
      name: '',
      materia: '',
      max: 10,
      min: 0,
    }
  },

  methods: {
    inserirName() {
      this.name = prompt('Insira o nome do aluno')
    },

    inserirMateria() {
      this.materia = prompt('Insira a matéria')
    },

    colherNotas() {
      let nota = parseFloat(prompt('Insira a nota (ou digite "stop" para encerrar a coleta de notas):'))
      if(nota > this.max || nota < this.min) {
        alert('Nota inválida, coloque uma nota entre ' + this.min + ' e ' + this.max + '!')
        nota = parseFloat(prompt('Insira a próxima nota (ou digite "stop" para encerrar a coleta de notas):'))
        
      }
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

      alert('A média de ' + this.name + ' é: ' + this.media.toFixed(2)  );

      setTimeout(() => {
        this.isAprovado();
      }, 500);
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
      this.media = ''
      this.name = ''
    }
  },
}
</script>

<style>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.btn {
  font-size: 16px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0069d9;
  border-color: #0069d9;
}

.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-danger:hover {
  background-color: #c82333;
  border-color: #c82333;
}

p {
  margin: 10px 0;
}
</style>
