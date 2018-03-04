import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

/**
 * Element.closest() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
 */
if (!Element.prototype.closest) {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }
    Element.prototype.closest = function (s) {
        var el = this;
        var ancestor = this;
        if (!document.documentElement.contains(el)) return null;
        do {
            if (ancestor.matches(s)) return ancestor;
            ancestor = ancestor.parentElement;
        } while (ancestor !== null);
        return null;
    };
}

document.addEventListener('click', function (event) {
  if (event.target.closest('.square')) {
    var el = event.target;
    var coord = el.getAttribute('data-coord');
    console.log('clicked a square: ', coord);
  } else {
    console.log('clicked outside a square:');
    return;
  }
}, false);
