import {createStore} from 'vuex';
import {users} from '../assets/users'

export default createStore ({
    state:{
         user: users[0]
    },

    mutations:{
        SET_USER(state,user){
            state.user=user;
        }

    },

    actions:{
        setUser({commit},user){
            commit('SET_USER',user);
        }

    },

    modules:{

    }
})