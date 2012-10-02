/**
    this file is responsible for providing functionality to define new classes
*/

(function (window){

    chUI.define = function(name, object){
        createNamespace(name, object);
    };

    var createNamespace = function(name, value) {
        var root = window,
            parts = name.split('.'),
            ln = parts.length - 1,
            leaf = parts[ln],
            i, part;
      
        for (i = 0; i < ln; i++) {
            part = parts[i];

            if (typeof part !== 'string') {
                root = part;
            } else {
                if (!root[part]) {
                    root[part] = {};
                }

                root = root[part];
            }
        }

        root[leaf] = value;

        return root[leaf];
    };
})(chUI.window);