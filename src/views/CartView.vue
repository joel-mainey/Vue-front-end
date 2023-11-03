<template>
  <div class="container text-center p-5">
    <div class="row justify-content-center" v-if="cartItems.length > 0">
    <h1 class="p-2">Shopping Cart </h1>
      <div class="card m-2" style="width: 20rem;" 
      v-for="product in cartItems"    
      v-bind:key="product.id">
        <img class="card-img top" v-bind:src="product.image"/>
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">${{ product.price }}</p>
            <button class="btn btn-danger" 
            v-on:click="removeFromCart(product.id)"
            >Remove From Cart</button>
          </div>
      </div>
      <h3 class="p-3" id="total-price">Total: ${{ totalPrice }}</h3>
      <button class="btn btn-warning" id="checkout-button">Proceed to Checkout</button>
    </div>
    <p v-else>You haven't added anything to your cart yet!</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CartView',
  data() {
    return {
      cartItems: [],
    }
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce(
        (sum, item) => sum + Number(item.price),
        0,
      );
    }
  },
  methods: {
    async removeFromCart(productId) {
      const result = await axios.delete(`/api/users/12345/cart/${productId}`);
      this.cartItems = result.data;
    }
  },
  async created() {
    const result = await axios.get('/api/users/12345/cart');
    const cartItems = result.data;
    this.cartItems = cartItems;
  },
};

</script>