<template>
  <div class="container text-center p-5" v-if="product">
    <div class="row justify-content-center">
      <h1 class="p-2">Product Details</h1>
        <div class="card" style="width: 40rem;">
        <img class="card-img top" v-bind:src="product.image"/>
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text"> {{ product.description }}</p>
            <p class="card-text">${{ product.price }}</p>
            <button class="btn btn-dark" id="add-to-cart" 
            v-if="!itemIsInCart && !showSuccessMessage" v-on:click="addToCart">Add to Cart</button>
            <button class="btn btn-success" id="add-to-cart" 
            v-if="!itemIsInCart && showSuccessMessage">Successfully added item to cart!</button>
            <button class="btn btn-secondary" id="add-to-cart" 
            v-if="itemIsInCart">Item is already in cart</button>
          </div>
      </div>
    </div>
  </div>
  <NotFoundView v-else/>
</template>

<script>
import axios from 'axios';
import NotFoundView from './NotFoundView.vue';

export default {
  name: 'ProductDetailView',
  components: {
    NotFoundView,
  },
  data() {
    return {
      product: {},
      cartItems: [],
      showSuccessMessage: false,
    };
  },
  computed: {
    itemIsInCart() {
      return this.cartItems.some(item => item.id === this.product.id);
    }
  },
  methods: {
    async addToCart() {
      await axios.post('/api/users/12345/cart', {
        productId: this.$route.params.id,
      });
      this.showSuccessMessage = true;
    },
  },
  async created() {
    const { data: product } = await axios.get(`/api/products/${this.$route.params.id}`);
    this.product = product;

    const { data: cartItems } = await axios.get('/api/users/12345/cart');
    this.cartItems = cartItems;
  }
};
</script>