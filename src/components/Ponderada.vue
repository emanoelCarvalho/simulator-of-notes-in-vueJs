<template>
    <div class="container">
        <h1>Média ponderada</h1>
        <p>Por favor, insira, o nome da matéria, seu nome, as notas e pesos, para podermos calcular</p>
        <p>Matéria: {{ materia }}</p>
        <p>Nome do aluno: {{ name }}</p>
        <p>Pesos: {{ pesos.join(', ') }}</p>
        <p>Notas: {{ notas.join(', ') }}</p>
        <p>Média: {{ media }}</p>

        <div class="d-flex justify-content-center mt-4">
            <button @click="inserirMaterial" class="btn btn-primary mx-2">Inserir matéria</button>
            <button @click="colherName" class="btn btn-primary mx-2">Inserir nome</button>
            <button @click="colherPesos" class="btn btn-primary mx-2">Colher pesos</button>
            <button @click="colherNotas" class="btn btn-primary mx-2">Colher notas</button>
            <button @click="calcularMedia" class="btn btn-primary mx-2">Calcular média</button>
            <button @click="clearAll" class="btn btn-danger mx-2">Limpar tudo</button>
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
            media: '',
            name: '',
            materia: '',
            max: 10,
            min: 0,
            maxPesos: 4,
            minPesos: 1
        }
    },
    methods: {

        inserirMaterial() {
            this.materia = prompt('Insira a matéria')
        },
        colherName() {
            this.name = prompt('Insira o nome do aluno')
        },
        colherNotas() {
            let nota = parseFloat(prompt('Insira a nota (ou digite "stop" para encerrar a coleta de notas):'))
            if (nota > this.max || nota < this.min) {
                alert('Nota inválida, coloque uma nota entre ' + this.min + ' e ' + this.max + '!')
                nota = parseFloat(prompt('Insira a próxima nota (ou digite "stop" para encerrar a coleta de notas):'))
            }
            while (!isNaN(nota)) {
                this.notas.push(nota)
                nota = parseFloat(prompt('Insira a próxima nota (ou digite "stop" para encerrar a coleta de notas):'))
            }
        },

        colherPesos() {
            let peso = parseFloat(prompt('Insira a pesos (ou digite "stop" para encerrar a coleta de pesos):'))
            if (peso > this.maxPesos || peso < this.minPesos) {
                alert('Peso inválido, digite um valor entre ' + this.minPesos + ' e ' + this.maxPesos + '!')
                peso = parseFloat(prompt('Insira o peso da nota: (ou digite "stop" para encerrar a coleta de pesos)'))
            }
            while (!isNaN(peso)) {
                this.pesos.push(peso)
                peso = parseFloat(prompt('Insira o peso da nota: (ou digite "stop" para encerrar a coleta de pesos)'))
            }
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

            setTimeout(() => {
                this.isAprovado();
            }, 500)
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
    margin: 0 auto;
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
