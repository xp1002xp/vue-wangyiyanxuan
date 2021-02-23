import mockAjax from './mockAjax'
import ajax from './ajax.js'

//获取首页导航数据列表
export const reqIndexData = () => mockAjax.get('/index')

//获取分类页数据
// 左侧一级分类
export const reqCategory1List = () => {
    return ajax({
        url: 'item/cateList.json',
        method:'get'
    })
}