// import dpcOtherTrouble from './router-dpc-trouble-manage'

export default [
  {
    path: '/',
    name: 'Home',
    meta: {
      breadcrumbItems: [
        // {
        //   text: '首页',
        //   to: { name: 'Home' }
        // },
        {
          text: '首页',
          active: true
        }
      ]
    },
    component: () => import('../../views/home/Home.vue')
  }
]