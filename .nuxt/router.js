import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3e49b8f0 = () => interopDefault(import('..\\pages\\directores.vue' /* webpackChunkName: "pages/directores" */))
const _6053d8fe = () => interopDefault(import('..\\pages\\productoras.vue' /* webpackChunkName: "pages/productoras" */))
const _5300c18c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _1c5e3f38 = () => interopDefault(import('..\\pages\\director\\_slug.vue' /* webpackChunkName: "pages/director/_slug" */))
const _244f4ff4 = () => interopDefault(import('..\\pages\\peliculas\\_slug.vue' /* webpackChunkName: "pages/peliculas/_slug" */))
const _12194a56 = () => interopDefault(import('..\\pages\\productora\\_slug.vue' /* webpackChunkName: "pages/productora/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/directores",
    component: _3e49b8f0,
    name: "directores"
  }, {
    path: "/productoras",
    component: _6053d8fe,
    name: "productoras"
  }, {
    path: "/",
    component: _5300c18c,
    name: "index"
  }, {
    path: "/director/:slug?",
    component: _1c5e3f38,
    name: "director-slug"
  }, {
    path: "/peliculas/:slug?",
    component: _244f4ff4,
    name: "peliculas-slug"
  }, {
    path: "/productora/:slug?",
    component: _12194a56,
    name: "productora-slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
