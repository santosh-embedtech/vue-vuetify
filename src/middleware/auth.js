export default function auth ({ next, store }){
    if(!store.getters['auth/isLoggedIn']){
        return next({
           name: 'login'
        })
    }
   
    return next()
   }