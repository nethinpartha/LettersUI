import { createStore } from 'vuex'


export const store = createStore({
    state: {
         user : null
    },
    getters: {
        stateValue: (state) => {
            return {
                "user": state.user
            }
        }
    },
    mutations: {
        changeUserState : (state, value) => {
            state.user = value;
        }
    },
    actions: {
        changeUserState : (context, value) =>{
            context.commit("changeUserState", value)
        }
    }
});

