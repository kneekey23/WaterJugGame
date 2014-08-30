//create namespaces to organize functions

var water = {
    page: {},
    layout: {}
};

water.startupLayout = function () {
    if (water.startup) {
        water.startup();
    }

}


water.layout.getQueryParams = function(qs) {
    qs = qs.split("+").join(" ");

    var params = {}, tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])]
            = decodeURIComponent(tokens[2]);
    }

    return params;
}