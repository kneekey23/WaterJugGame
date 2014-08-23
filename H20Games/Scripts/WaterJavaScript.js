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

$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || 0;
}