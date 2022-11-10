import axios from "axios"
export default {
    namespaced:true,
    state: {
        token:null,
        user:null
    },
    getters: {
        isLoggedIn(state){
            return state.token && state.user;
        }
    },
    mutations: {
        SET_TOKEN(state,token){
            state.token=token;
        },
        SET_USER(state,user){
            state.user=user;
        }
    },
    actions: {
        async signIn({dispatch},crediential){
            let response=await axios.post('',crediential)
           return dispatch('attempt',response.data);
        },
        async  attempt({commit,state},token){
            if(token){
                commit('SET_TOKEN',token)
            }
            if(!state.token){
                return
            }
            //fetch user 
            try{
                let response=await axios.get('/user')
                commit('SET_USER',response.data)

            }catch(e){
                commit('SET_USER',null)
                commit('SET_TOKEN',null)
            }
        }
    }
}