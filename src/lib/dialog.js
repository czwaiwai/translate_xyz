import { Modal } from '@arco-design/web-vue';


export function dialog(config) {
  let resolve, reject
  let promise = new Promise((resol, rej) => (resolve = resol, reject = rej))
  let defaultPar = {
    draggable: true,
    onOk: resolve,
    onCancel: reject,
    onClose: reject,
    ...config,
  }
  let model = Modal.open(defaultPar)
  promise.close = model.close.bind(model)
  promise.update = model.update.bind(model)
  return promise
}
dialog.confirm = function(config, title) {
  // let [promise, resolve, reject ] = Promise.withResolvers
  let resolve, reject
  let promise = new Promise((resol, rej) => (resolve = resol, reject = rej))
  let defaultPar = {
    title: title || '确认',
    draggable: true,
    onOk: resolve,
    onCancel: reject,
    onClose: reject
  }
  let par = {}
  if (typeof config === 'string') {
    par.content = config
  } else {
    Object.assign(par, config)
  }
  let model =  Modal.open({
    ...defaultPar,
    ...par
  })
  promise.close = model.close.bind(model)
  promise.update = model.update.bind(model)
  return promise
}
dialog.alert = function (config, title) {
  let defaultPar = {
    title: title || '确认',
    draggable: true,
    hideCancel: true
  }
  let par = {}
  if (typeof config === 'string') {
    par.content = config
  } else {
    Object.assign(par, config)
  }
  return Modal.open({
    ...defaultPar,
    ...par
  })
}
