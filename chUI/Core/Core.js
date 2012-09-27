/**
 * @class chUI
 * @singleton
 */
var chUI =  (function(window, undefined) {
    var chui = {},
        C;

    chui.window = window;

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

    C.chui = chui;

    return C;
})();

window.chUI = window.chUI || chUI;