export default function guest ({  next,store }){
    if(store.getters['auth/isLoggedIn']){
        return next({
           name: 'home'
        })
    }
   
    return next()
   }