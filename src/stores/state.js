import { Ref} from "vue";

const state = {
    Ref: "menu"
}

function changeState(newState) {
    state.Ref = newState;
}

export default {
    state,
    changeState
}
