import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView/HomeView.vue'
import AddContact from '../views/AddContact/AddContact.vue'
import EditContact from '../views/EditContact/EditContact.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add-contact',
    name: 'add-contact',
    component: AddContact
  },
  {
    path: '/edit-contact/:id',
    name: 'edit-contact',
    component: EditContact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
