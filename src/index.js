import tingleLibrary from 'tingle.js'
import 'tingle.js/dist/tingle.css'
import Vue from 'vue'

const defaultOptions = {
  footer: true,
  stickyFooter: false,
  closeMethods: ['overlay', 'button', 'escape'],
  closeLabel: 'Close',
  cssClass: ['custom-class-1', 'custom-class-2'],
  onOpen: function () {
  },
  onClose: function () {
  },
  beforeClose: function () {
    // here's goes some logic
    // e.g. save content before closing the modal
    this.destroyComponent()
    this.setFooterContent('')
    return true // close the modal
    // return false // nothing happens
  }
}

const Tingle = {
  install (Vue, options) {
    const Modal = vueifyTingle(tingleLibrary.modal)
    options = options || defaultOptions
    Vue.prototype.$modal = new Modal(options)
  }
}

const vueifyTingle = (modal) => {
  modal.prototype.viewModel = {}
  modal.prototype.setComponent = setComponent
  modal.prototype.destroyComponent = destroyComponent
  modal.prototype.setFooterVisible = setFooterVisible
  modal.prototype.setStickyFooter = setStickyFooter
  return modal
}

function destroyComponent () {
  if (this.viewModel.hasOwnProperty('_isVue') && this.viewModel._isVue) {
    this.viewModel.$destroy()
  }
  this.viewModel = {}
}

function setComponent (vueComponent) {
  const Constructor = Vue.extend(vueComponent)
  this.viewModel = new Constructor().$mount()
  this.setContent(this.viewModel.$el)
}

function setFooterVisible (isVisible) {
  let visible = isVisible
  if (isVisible === undefined) {
    visible = true
  }
  this.opts.footer = visible
}

function setStickyFooter (isSticky) {
  var sticky = isSticky
  if (isSticky === undefined) {
    sticky = true
  }

  if (sticky) {
    this.opts.footer = true
  }

  this.opts.stickyFooter = sticky
}

export default Tingle

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Tingle)
}
