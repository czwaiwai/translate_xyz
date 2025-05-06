import {range, padStart} from 'lodash-es'

console.log(range(100).map(num => padStart(num, 2, '0')))
