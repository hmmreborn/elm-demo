import Mock from 'mockjs'
import data from './data.js'
import city from './city'

Mock.mock('/icons', { code: 0, data: data.icons })

Mock.mock('/shops', { code: 0, data: data.shops })

Mock.mock('/info', { code: 0, data: data.info })

Mock.mock('/order', { code: 0, data: data.order })

Mock.mock('/foods', { code: 0, data: data.foods })

Mock.mock('/city', { data: city.data })

Mock.mock('/userAddress', { data: data.userAddress })
