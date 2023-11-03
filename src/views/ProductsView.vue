<template>
    <div class="container text-center mt-5">
      <h1 class="p-2">Products Page</h1>
    </div>
    <Productcomponent>
    </Productcomponent>
</template>

<script>
import Productcomponent from '../components/Product-component.vue'

export default {
  name: 'ProductsView',
  components: {
    Productcomponent
  }
}
</script>
