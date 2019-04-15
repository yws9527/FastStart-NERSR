const config = [
  { path: '/', component:  () => import('../App.js'),
    routes: [
      { path: 'login', component: () => import('../login.js') }
    ]
  }
]

export default config