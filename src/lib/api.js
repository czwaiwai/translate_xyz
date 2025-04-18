import request from './request.js'

export const api = {
  LOGIN: '/login',
}
export const emnum = {
  category: [
    { label: '全部', value: '0' },
    { label: '二定位', value: '20' },
    { label: '口口XX', value: '1' },
    { label: '口X口X', value: '2' },
    { label: '口XX口', value: '3' },
    { label: 'X口X口', value: '4' },
    { label: 'X口口X', value: '5' },
    { label: 'XX口口', value: '6' },
    { label: '三定位', value: '30' },
    { label: '口口口X', value: '7' },
    { label: '口口X口', value: '8' },
    { label: '口X口口', value: '9' },
    { label: 'X口口口', value: '10' },
    { label: '四定位', value: '11' },
    { label: '二字现', value: '12' },
    { label: '三字现', value: '13' },
    { label: '四字现', value: '14' },
    { label: '快打', value: '101' },
    { label: '快选', value: '102' },
    { label: 'txt导入', value: '103' },
    { label: '二定', value: '104' },
    { label: '汇总表', value: '107' },
  ],
  topCate: [
    { label: '全部', value: '0' },
    { label: '二定位', value: '20' },
    { label: '三定位', value: '30' },
    { label: '四定位', value: '40' },
    { label: '二字现', value: '21' },
    { label: '三字现', value: '31' },
    { label: '四字现', value: '41' },
  ],
  frontCate: [
    { label: '全部', value: '0' },
    { label: '二定位', value: '20' },
    { label: '口口XX', value: '1' },
    { label: '口X口X', value: '2' },
    { label: '口XX口', value: '3' },
    { label: 'X口X口', value: '4' },
    { label: 'X口口X', value: '5' },
    { label: 'XX口口', value: '6' },
    { label: '三定位', value: '30' },
    { label: '口口口X', value: '7' },
    { label: '口口X口', value: '8' },
    { label: '口X口口', value: '9' },
    { label: 'X口口口', value: '10' },
    { label: '四定位', value: '11' }
  ],
  package: [
    { label: '全部', value: '-1' },
    { label: '散伙', value: '0' },
    { label: '包牌', value: '1' },
    { label: '包牌+散货', value: '2' },
    { label: '汇总表', value: '3' }
  ],
  packageSmall: [
    { label: '全部', value: '-1' },
    { label: '下注', value: '0' },
    { label: '包牌', value: '1' },
  ],
  betStatus: [
    {label: '全部', value: '-1'},
    {label: '未下注', value: '0'},
    {label: '已下注', value: '1'},
  ],
  cancelStatus: [
    {label: '全部', value: '-1'},
    {label: '未取消', value: '0'},
    {label: '已取消', value: '1'},
  ],
  searchType: [
    {label: '赔率', value: '1'},
    {label: '金额', value: '2'},
  ],
  searchType2: [
    {label: '赔率', value: '1'},
    {label: '金额', value: '2'},
    {label: '退码', value: '3'},
  ]
}
export const login = (data) => {
  return request({
    url: api.LOGIN,
    method: 'post',
    data,
  })
}

