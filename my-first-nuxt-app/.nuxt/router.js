import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3c59c6c9 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _495f5c0b = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _15edff8f = () => interopDefault(import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */))
const _11794904 = () => interopDefault(import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */))
const _44209384 = () => interopDefault(import('../pages/users/index.vue' /* webpackChunkName: "pages/users/index" */))
const _424175c2 = () => interopDefault(import('../pages/admin/auth/index.vue' /* webpackChunkName: "pages/admin/auth/index" */))
const _2e9e59f2 = () => interopDefault(import('../pages/admin/new-post/index.vue' /* webpackChunkName: "pages/admin/new-post/index" */))
const _6697f636 = () => interopDefault(import('../pages/admin/_postId/index.vue' /* webpackChunkName: "pages/admin/_postId/index" */))
const _40e28a0c = () => interopDefault(import('../pages/posts/_id/index.vue' /* webpackChunkName: "pages/posts/_id/index" */))
const _c47ae75a = () => interopDefault(import('../pages/products/_pid/index.vue' /* webpackChunkName: "pages/products/_pid/index" */))
const _6c876722 = () => interopDefault(import('../pages/users/_id/index.vue' /* webpackChunkName: "pages/users/_id/index" */))
const _0a34478b = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _3c59c6c9,
    name: "about"
  }, {
    path: "/admin",
    component: _495f5c0b,
    name: "admin"
  }, {
    path: "/posts",
    component: _15edff8f,
    name: "posts"
  }, {
    path: "/products",
    component: _11794904,
    name: "products"
  }, {
    path: "/users",
    component: _44209384,
    name: "users"
  }, {
    path: "/admin/auth",
    component: _424175c2,
    name: "admin-auth"
  }, {
    path: "/admin/new-post",
    component: _2e9e59f2,
    name: "admin-new-post"
  }, {
    path: "/admin/:postId",
    component: _6697f636,
    name: "admin-postId"
  }, {
    path: "/posts/:id",
    component: _40e28a0c,
    name: "posts-id"
  }, {
    path: "/products/:pid",
    component: _c47ae75a,
    name: "products-pid"
  }, {
    path: "/users/:id",
    component: _6c876722,
    name: "users-id"
  }, {
    path: "/",
    component: _0a34478b,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
