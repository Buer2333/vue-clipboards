/*!
 * vue-clipboards v0.2.0
 * (c) 2016 卓文理 <531840344@qq.com>
 * Released under the MIT License.
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.vueClipboard = factory());
}(this, (function () { 'use strict';

/**
 * @author: 卓文理
 * @email : 531840344@qq.com
 * @desc  : VueClipboard
 */

var Clipboard = require('Clipboard');

if (!Clipboard) {
    throw new Error('[vue-clipboards] cannot locate Clipboard.');
}

var VueClipboard = function (Vue) {
    var clipboards = void 0;

    Vue.directive('clipboard', {
        bind: function bind(container, binding, vnode) {
            var value = binding.value;
            var listeners = vnode.componentOptions.listeners;

            var option = {};

            if (value && typeof value === 'string') {
                option.text = function () {
                    return value;
                };
            }

            clipboards = new Clipboard(container, option);

            if (listeners) {
                Object.keys(listeners).map(function (callback) {
                    return clipboards.on(callback, listeners[callback].fn);
                });
            }
        },

        // update (container, binding) {
        //     console.log(container, binding);
        // },
        unbind: function unbind() {
            clipboards.destroy();
        }
    });
};

/**
 * @author: 卓文理
 * @email : 531840344@qq.com
 * @desc  : index
 */

function plugin(Vue) {
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (plugin.installed) {
        console.warn('[vue-clipboards] already installed.');
    }

    VueClipboard(Vue);
}

if (typeof define === 'function' && define.amd) {
    define([], function () {
        return { plugin: plugin };
    });
} else if (window.Vue) {
    window.Vue.use(plugin);
}

return plugin;

})));