// import dpcOtherTrouble from './router-dpc-trouble-manage'

export default [
  {
    path: '/trickery',
    name: 'Trickery',
    meta: {
      breadcrumbItems: [
        // {
        //   text: '权谋',
        //   to: { name: 'Trickery' }
        // },
        {
          text: '权谋',
          active: true
        }
      ]
    },
    component: () => import('../../views/trickery/Trickery.vue')
  }
]