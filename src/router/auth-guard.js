import { store } from "../store";

export default (to, from, next) => {
    if(store.getters.vendor) {
        next()
    }else {
        next('/signin')
    }
}