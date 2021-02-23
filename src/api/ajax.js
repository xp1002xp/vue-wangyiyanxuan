/* axios二次封装 */

import axios from 'axios'

const service = axios.create({
    baseURL: '/api',
    timeout:20000
})

//添加请求拦截器
service.interceptors.request.use((config) => {
    return config
})

//添加响应拦截器
service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        return Promise.reject(error)
    }
)

export default service