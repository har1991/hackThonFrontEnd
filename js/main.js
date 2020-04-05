// api https://jsonplaceholder.typicode.com/albums
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/albums?userId=1


// 1. Define route components.
// These can be imported from other files

// files is loaded from js/components

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
    {path: '/', name: 'home', component: Accueil},
    {path: '/accueil', name: 'accueil', component: Accueil},
    {path: '/details', name: 'details', component: Details},
    {path: '/actu', name: 'actualite', component: Actualite},
    {path: '/arnaque', name: 'arnaque', component: Arnaque},
    {path: '/envoyeremail', name: 'envoyeremail', component: Envoyeremail},
    {path: '/livres', name: 'livresnumeriques', component: Livresnumeriques}
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes // short for `routes: routes`
});

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
    router
}).$mount('#app');

/* There was a problem with pages: they were dispayed from the middle of the page
=> this function forces to show the top at first */
router.afterEach((to, from) => {
    document.getElementById('app').scrollIntoView()
  })