// import dpcOtherTrouble from './router-dpc-trouble-manage'

export default [
  {
    path: '/hero',
    name: 'Hero',
    meta: {
      breadcrumbItems: [
        // {
        //   text: '论英雄',
        //   to: { name: 'Hero' }
        // },
        {
          text: '论英雄',
          active: true
        }
      ]
    },
    component: () => import('../../views/hero/Hero.vue')
  }
]