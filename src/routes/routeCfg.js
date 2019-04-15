const App = import('../App.js')

const config = [
  { path: '/', component: App,
    childRoutes: [
      { path: 'login', component: () => import('../login.js') },
      /*{ path: 'inbox',
        component: Inbox,
        childRoutes: [
          { path: '/messages/:id', component: Message },
          { path: 'messages/:id',
            onEnter: function (nextState, replaceState) {
              replaceState(null, '/messages/' + nextState.params.id)
            }
          }
        ]
      }*/
    ]
  }
]

export default config