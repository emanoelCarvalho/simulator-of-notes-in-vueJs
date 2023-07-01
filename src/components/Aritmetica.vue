<template>
  <div class="container">
    <h1>Média Aritmética</h1>
    <p>Preencha os campos abaixo para realizar as operações</p>
    <p>Ao colocar as notas no seu respectivo campo, adicione vírgula ao colocar cada nota para que possamos separá-las e calcular a média aritmética.</p>

    <div class="form-group">
      <label for="name">Nome do Aluno</label>
      <input type="text" class="form-control" id="name" v-model="name" />
    </div>

    <div class="form-group">
      <label for="materia">Matéria</label>
      <input type="text" class="form-control" id="materia" v-model="materia" />
    </div>

    <div class="form-group">
      <label for="media">Média da Instituição</label>
      <input type="text" class="form-control" id="media" v-model="mediaDaInstituicao" />
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
import swal from 'sweetalert'

export default {
  name: 'Aritmetica',

  data() {
    return {
      notas: '',
      media: 0,
      mediaDaInstituicao: '',
      name: '',
      materia: '',
    }
  },

  methods: {
    calcularMedia() {
      const notas = this.notas.split(',').map(nota => Number(nota))
      const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length

      this.media = media.toFixed(2)

      swal(`A média do aluno ${this.name} na matéria ${this.materia} é ${this.media}`)
      setTimeout(() => {
        this.isAprovado()
      }, 3000)
    },

    isAprovado() {
      const mediaDaInstituicao = parseFloat(this.mediaDaInstituicao)
      this.media >= mediaDaInstituicao ? swal('Aprovado', '', 'success') : swal('Reprovado', '', 'error')
    },

    clearAll() {
      this.notas = ''
      this.media = 0
      this.name = ''
      this.materia = ''
      this.mediaDaInstituicao = ''
    }
  },
}
</script>

<style scoped>
.container {
  max-width: 700px;
  max-height: 700px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.btn {
  font-size: 16px;
}

.btn-primary {
  background-color: #007BFF;
  border-color: #007BFF;
}

.btn-primary:hover {
  background-color: #0069D9;
  border-color: #0069D9;
}

.btn-danger {
  background-color: #DC3545;
  border-color: #DC3545;
}

.btn-danger:hover {
  background-color: #C82333;
  border-color: #C82333;
}

p {
  margin: 10px 0;
}
</style>
