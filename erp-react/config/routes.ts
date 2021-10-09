export default [
  { path: '/login', layout: false, name: '登录', component: './Login' },
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    name: '资产管理',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      { path: '/admin/sub-page', name: '二级管理页', icon: 'smile', component: './Welcome' },
      { component: './404' },
    ],
  },
  {
    path: '/task',
    name: '事务流程',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      { path: '/task/sub-page', name: '二级管理页', icon: 'smile', component: './Welcome' },
      { component: './404' },
    ],
  },
  {
    path: '/permission',
    name: '权限管理',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      { path: '/permission/sub-page', name: '二级管理页', icon: 'smile', component: './Welcome' },
      { component: './404' },
    ],
  },
  {
    path: '/system',
    name: '系统设置',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      { path: '/system/entityModel', name: '实体模型', icon: 'smile', component: './Welcome' },
      { path: '/system/taskModel', name: '事件模型', icon: 'smile', component: './Welcome' },
      { path: '/system/pageView', name: '页面展示', icon: 'smile', component: './Welcome' },
      { path: '/system/setting', name: '系统设置', icon: 'smile', component: './Welcome' },
      { component: './404' },
    ],
  },
  { name: '查询表格', icon: 'table', path: '/list', component: './TableList' },
  { path: '/', redirect: '/welcome' },
  { component: './404' },
];
