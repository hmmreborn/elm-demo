import { get } from './http'

export const reqIcons = () => get('/icons')

export const reqShops = () => get('/shops')

export const reqShopInfo = () => get('/info')

export const reqOrder = () => get('/order')

export const reqFoods = () => get('/foods')

export const reqCity = () => get('/city')

export const reqUserAddress = () => get('/userAddress')
