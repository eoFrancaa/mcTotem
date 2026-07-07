import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
  }),

  getters: {
    total(state) {
      return state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    totalItems(state) {
      return state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
    },
  },

  actions: {
    addProduct(product) {
      const existing = this.items.find(
        item => item.id === product.id
      );

      if (existing) {
        existing.quantity++;
      } else {
        this.items.push({
          ...product,
          quantity: 1
        });
      }
    },

    removeProduct(id) {
      this.items = this.items.filter(
        item => item.id !== id
      );
    }
  }
});