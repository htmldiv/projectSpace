/*
 * @Description: 表格相关路由
 * @Author: wander
 * @Date: 2022-05-05 15:03:56
 * @LastEditors: wander
 * @LastEditTime: 2022-05-05 16:40:27
 */
// import { RouteRecordRaw } from 'vue-router'
const tableRouter = [
  {
    path: '/table',
    component: '',
    redirect: '/table/complex-table',
    name: 'Table',
    meta: {
      title: 'table',
      icon: '#icontable'
    },
    children: [
      {
        path: 'dynamic-table',
        component: () => import(/* webpackChunkName: "dynamic-table" */ '@/views/table/dynamic-table/index.vue'),
        name: 'ComplexTable',
        meta: { title: 'complexTable' }
      },
      {
        path: 'Draggable_table',
        component: () => import(/* webpackChunkName: "draggable-table" */ '@/views/table/draggableTable.vue'),
        name: 'DraggableTable',
        meta: { title: 'draggableTable' }
      },
      {
        path: 'Inline_edit_table',
        component: () => import(/* webpackChunkName: "inline-edit-table" */ '@/views/table/inlineEditTable.vue'),
        name: 'InlineEditTable',
        meta: { title: 'inlineEditTable' }
      },
      {
        path: 'Complex_table',
        component: () => import(/* webpackChunkName: "complex-table" */ '@/views/table/complexTable.vue'),
        name: 'DynamicTable',
        meta: { title: 'dynamicTable' }
      }
    ]
  }
]

export default tableRouter