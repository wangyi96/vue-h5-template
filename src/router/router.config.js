/**
 * 基础路由配置
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/pages/layouts/index'),
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/pages/home/index'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/pages/home/about'),
        meta: { title: '关于我', keepAlive: false }
      }
    ]
  }
]
