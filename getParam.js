var getParam = function (str, key) {
        if (arguments.length == 1) {
            key = str;
            str = location.href;
        }
        var reg = new RegExp('[^\\w*]' + key +  '=([^#&]*)', 'i',
            r=reg.exec(str);
        return r != null?decodeURIComponent(r[1]):null;
    };
