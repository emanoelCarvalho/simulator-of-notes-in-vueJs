<template>
    <div class="container">
        <h1>Média ponderada</h1>
        <p>Preencha os campos abaixo, para podermos realizar as operações</p>
        <p>Ao colocar as notas no seu respectivo campo, adicione vírgula ao colocar cada nota,
            para que possamos separar as notas, e assim calcular a média ponderada, o mesmo vale para os pesos.
        </p>

        <div class="form-group">
            <label for="name">Nome do Aluno</label>
            <input type="text" class="form-control" id="name" v-model="name" />
        </div>

        <div class="form-group">
            <label for="materia">Matéria</label>
            <input type="text" class="form-control" id="materia" v-model="materia" />
        </div>

        <div class="form-group">
            <label for="pesos">Pesos</label>
            <textarea name="pesos" v-model="pesos" id="pesos" class="form-control"></textarea>
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
    name: 'Ponderada',

    data() {
        return {
            notas: '',
            pesos: '',
            media: '',
            name: '',
            materia: '',
        }
    },

    methods: {
        calcularMedia() {
            if (
                this.notas.length === 0 ||
                this.pesos.length === 0
            ) {
                swal('Atenção', 'Preencha todos os campos', 'warning')
                return
            }

            const notas = this.notas.split(',').map(nota => parseFloat(nota))
            const pesos = this.pesos.split(',').map(peso => parseFloat(peso))

            if (notas.length !== pesos.length) {
                swal('Atenção', 'A quantidade de notas e pesos deve ser igual', 'warning')
                return
            }

            const somaNotas = notas.reduce((acc, nota, index) => acc + nota * pesos[index], 0)
            const somaPesos = pesos.reduce((acc, peso) => acc + peso, 0)

            this.media = (somaNotas / somaPesos).toFixed(2)

            swal(`A média do aluno ${this.name} na matéria ${this.materia} é ${this.media}`)
            setTimeout(() => {
                this.isAprovado()
            }, 3000)
        },

        isAprovado() {
            this.media >= 6
                ? swal('Aprovado', '', 'success')
                : swal('Reprovado', '', 'error')
        },

        clearAll() {
            this.notas = ''
            this.pesos = ''
            this.media = ''
            this.name = ''
            this.materia = ''
        }
    }
}
</script>
    
<style>
.container {
    max-width: 600px;
    margin: 10px auto;
    padding: 20px;
    text-align: center;
}

.btn {
    font-size: 16px;
}

.btn-primary {
    background-color: #008CBA;
    border-color: #008CBA;
}

.btn-primary:hover {
    background-color: #007199;
    border-color: #007199;
}

.btn-danger {
    background-color: #DC3545;
    border-color: #DC3545;
}

.btn-danger:hover {
    background-color: #B52E3D;
    border-color: #B52E3D;
}

p {
    margin: 10px 0;
}
</style>
  