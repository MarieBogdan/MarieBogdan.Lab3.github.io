import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from '../components/AboutPage.vue';
import HomePage from '../components/HomePage.vue';
import ProfilePage from '../components/ProfilePage.vue';
import RegisterPage from '../components/RegisterPage.vue';
import LoginPage from '../components/LoginPage.vue';
import AddRecipePage from '../components/AddRecipePage.vue';



const routes = [
  { path: '/', component: HomePage },
  { path: '/profile', component: ProfilePage },
  { path: '/about', component: AboutPage },
  { path: '/register', component: RegisterPage },
  { path: '/login', component: LoginPage },
  { path: '/addRecipe', component: AddRecipePage },

];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
