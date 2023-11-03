<template>
  <div class="container text-center p-5">
    <div class="row justify-content-center">	
        <div class="card m-2" style="width: 18rem;" v-for="product in products" v-bind:key="product.id">
          <img class="card-img-top" v-bind:src="product.image" />
          <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text"> {{ product.description }}</p>
          <p>${{ product.price }}</p>
          <router-link v-bind:to="'/products/' + product.id">
            <button class="btn btn-dark">View Details</button>
          </router-link>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Product-component',
  data() {
    return {
      products: [],
    };
  },
  async created() {
    const result = await axios.get('/api/products');
    const products = result.data;
    this.products = products;
  }
};
</script>