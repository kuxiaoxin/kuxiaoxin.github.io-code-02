// import dpcOtherTrouble from './router-dpc-trouble-manage'

export default [
  {
    path: '/think',
    name: 'Think',
    meta: {
      breadcrumbItems: [
        // {
        //   text: '锦囊',
        //   to: { name: 'Think' }
        // },
        {
          text: '锦囊',
          active: true
        }
      ]
    },
    component: () => import('../../views/think/Think.vue')
  }
]