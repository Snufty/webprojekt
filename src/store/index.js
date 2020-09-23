import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    basketItems: [
      {
        name: "Bagel",
        description: "Stuff",
        price: 159,
        quantity: 1,
      },
    ],
    currentUser: null
  },

  mutations: {
    addBasketItems: (state, basketItems) => {
      if (basketItems instanceof Array) {
        basketItems.forEach(item => {
          if (state.basketItems.find((itemInArray) => item.name === itemInArray.name)) {
            item = state.basketItems.find(
              (itemInArray) => item.name === itemInArray.name
            );
            item.quantity++;
          } else {
            state.basketItems.push({
              name: item.name,
              price: item.price,
              quantity: 1,
            });
          }
        })
      }
    },
    userStatus(state, user) {
      if (user) {
        state.currentUser = user
      }
      else {
        state.currentUser = null
      }
    }
  },
  actions: {
    setUser(context, user) {
      context.commit('userStatus', user)
    }
  },
  modules: {
  },
  getters: {
    getBasketItems: state => state.basketItems,
    currentUser: state => state.currentUser
  },
})
