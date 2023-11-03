import { createRouter, createWebHashHistory } from 'vue-router'
import ProductsView from '../views/ProductsView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import CartView from '../views/CartView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/products/:id',
    name: 'productDetail',
    component: ProductDetailView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/',
    redirect: '/products'
  },
  {
    path: '/:catchAll(.*)',
    component: NotFoundView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
