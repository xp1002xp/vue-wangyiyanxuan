//利用mockjs来mock数据接口

import Mock from 'mockjs'
import index from './index.json'
Mock.mock('/mock/index', {
  code: 200,
  data:index
})