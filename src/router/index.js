import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register')
  },
  {
    path: '/allproducts',
    name: 'Products',
    component: () => import('../views/Products')
  },
  {
    path: '/item/:id',
    name: 'SingleItem',
    component: () => import('../views/Detail')
  },
   {
     path: '/products/:category',
     name: 'Category',
     component: () => import('../views/Category')
   },
   {
    path: '/reset-pass/:token',
    name: 'Reset',
    component: () => import('../views/Reset-pass')
  },
  {
    path: '/userprofile',
    name: 'UserProfile',
    meta: {
     requireAuth: true
    },
    component: () => import('../views/UserProfile'),
    children: [
    {
      path:'profile',
      component: () => import('../views/Profile')
    }, 
    {
      path:'order',
      component: () => import('../views/Order')
    },
    {
      path:'coupon',
      component: () => import('../views/Coupon')
    },
    {
      path:'password',
      component: () => import('../views/Modi_pass')
    },
    {
      path:'favlist',
      component: () => import('../views/Favlist')

    }
  ]
   },
   {
    path: '/checkout',
    name: 'Checkout',
    meta: {
     requireAuth: true
    },
    component:() => import('../views/Checkout'),
    redirect:'/checkout/check',
    children: [
      {
        path:'check',
        components: {
          Cart: () => import('../views/Cart'),     
          Info: () => import('../views/Information'),
          Fin: () => import('../views/Finish')
        }
      }
    ]  
   }, 
   {
    path: '/order/detail/:id',
    name: 'OrderDetail',
    component: () => import('../views/Order_detail')
   }, 
   {
    path: '/about',
    name: 'About',
    component: () => import('../views/About')
   }, 
  {
    path:'/error',
    name:'error',
    component:() => import('../views/Error')
  },
  {
    path:'*',
    redirect:'/error'
  }
 ]

const router = new VueRouter({
  routes,
  linkActiveClass:'active',
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
})

export default router
