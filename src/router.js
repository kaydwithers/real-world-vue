import Vue from 'vue'
import Router from 'vue-router'
import EventShow from './views/EventShow.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/EventList.vue')
    },
    {
      path: '/event/:id',
      name: 'event-show',
      props: true,
      component: EventShow
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/EventCreate.vue')
    }
  ]
})
