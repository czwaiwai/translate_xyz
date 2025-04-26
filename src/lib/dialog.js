import { Modal } from '@arco-design/web-vue';


export function dialog(config) {
  config.draggable = true
  return Modal.open(config)
}
dialog.confirm = function(config, title) {
  let defaultPar = {
    title: title || '确认',
    draggable: true
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
