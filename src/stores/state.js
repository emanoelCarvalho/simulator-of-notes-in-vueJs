import ref from 'vue'

let state = ref({
    state : 'menu'
})

function setState(newState){
    state .value = newState
}

export default {
    state,
    setState
}