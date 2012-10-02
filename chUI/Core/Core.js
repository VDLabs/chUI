/**
 * @class chUI
 * @singleton
 */
var chUI = chUI || (function(window, undefined) {
    var chui = {},
        C;

    function isFunction(value) { return typeof value === 'function'; }
    function isObject(value) { return typeof value === 'object'; }
    function isArray(value) { return typeof value === 'array'; }
    function isString(value) { return typeof value === 'string'; }

    chui.sel = function (selector, context){
        if (!selector){
            return [];
        } else if ( isFunction(selector)){

        } else if ( isString(selector) ){

        }
        //uzywamy wlasnych kolekcji ?
        //else if ()
        //uzyc contextu
    };

    C = function(selector, context){
        return chui.sel(selector, context);
    };

    //merge objects
    /*
    chui.apply = function(object, config) {
        if (object && config && typeof config === 'object') {
            var i, j, k;

            for (i in config) {
                object[i] = config[i];
            }

            if (enumerables) {
                for (j = enumerables.length; j--;) {
                    k = enumerables[j];
                    if (config.hasOwnProperty(k)) {
                        object[k] = config[k];
                    }
                }
            }
        }

        return object;
    };
    */
    C.chui = chui;
    C.window = window;

    return C;
})(window);

window.chUI = window.chUI || chUI;