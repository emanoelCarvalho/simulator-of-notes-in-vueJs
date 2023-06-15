<template>
  <div class="container">
    <h1>Média Aritmética</h1>
    <p>Preencha os campos abaixo, para podermos realizar as operações</p>

    <div class="form-group">
      <label for="name">Nome do Aluno</label>
      <input type="text" class="form-control" id="name" v-model="name" />
    </div>
    <div class="form-group">
      <label for="materia">Matéria</label>
      <input type="text" class="form-control" id="materia" v-model="materia" />
    </div>
    <div class="form-group">
      <label for="notas">Notas</label>
      <textarea name="notas" v-model="notas" id="notas" class="form-control"></textarea>
    </div>
    <div class="d-flex justify-content-center mt-4">
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
    }
  },

  methods: {
    calcularMedia() {
      const notas = this.notas.split(',').map(nota => Number(nota))
      const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length

      this.media = media.toFixed(2)
      alert('A média do aluno ' + this.name + ' na matéria ' + this.materia + ' é ' + this.media);

      setTimeout(() => {
        this.isAprovado()
      }, 1000)


    },

    isAprovado() {
      this.media >= 6 ? alert('O aluno ' + this.name + ' foi ' + ' aprovado') : alert('O aluno ' + this.name + ' foi ' + ' reprovado')
    },


    clearAll() {
      this.notas = []
      this.media = ''
      this.name = ''
      this.materia = ''
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
