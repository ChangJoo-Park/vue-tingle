/*!
 * vue-tingle v0.0.1 
 * (c) 2017 ChangJoo Park
 * Released under the MIT License.
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var tingleLibrary = _interopDefault(require('tingle.js'));
var tingle_js_dist_tingle_css = require('tingle.js/dist/tingle.css');
var Vue = _interopDefault(require('vue'));

var defaultOptions = {
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
    this.destroyComponent();
    this.setFooterContent('');
    return true // close the modal
    // return false // nothing happens
  }
};

var Tingle = {
  install: function install (Vue$$1, options) {
    var Modal = vueifyTingle(tingleLibrary.modal);
    options = options || defaultOptions;
    Vue$$1.prototype.$modal = new Modal(options);
  }
};

var vueifyTingle = function (modal) {
  modal.prototype.viewModel = {};
  modal.prototype.setComponent = setComponent;
  modal.prototype.destroyComponent = destroyComponent;
  modal.prototype.setFooterVisible = setFooterVisible;
  modal.prototype.setStickyFooter = setStickyFooter;
  return modal
};

function destroyComponent () {
  if (this.viewModel.hasOwnProperty('_isVue') && this.viewModel._isVue) {
    console.log('destroy');
    this.viewModel.$destroy();
  }
  this.viewModel = {};
}

function setComponent (vueComponent) {
  var Constructor = Vue.extend(vueComponent);
  this.viewModel = new Constructor().$mount();
  this.setContent(this.viewModel.$el);
}

function setFooterVisible (isVisible) {
  var visible = isVisible;
  if (isVisible === undefined) {
    visible = true;
  }
  this.opts.footer = visible;
}

function setStickyFooter (isSticky) {
  var sticky = isSticky;
  if (isSticky === undefined) {
    sticky = true;
  }

  if (sticky) {
    this.opts.footer = true;
  }

  this.opts.stickyFooter = sticky;
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Tingle);
}

module.exports = Tingle;
