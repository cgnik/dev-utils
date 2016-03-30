_ = require('underscore');

DeepFind = function (objectToInspect, propertyToFind) {
    this.objectToInspect = objectToInspect;
    this.propertyToFind = propertyToFind;
}
DeepFind.prototype.find = function () {
    return this._find(this.objectToInspect, this.propertyToFind);
}

DeepFind.prototype._find = function (object, propertyName) {
    var self = this;
    var collected = [];
    if (object.hasOwnProperty(propertyName)) {
        return [object[propertyName]];
    }
    _.each(object, function (value, property) {
        console.log(value + ":" + property);
        if (object.hasOwnProperty(property) && typeof value === 'object') {
            var l = self._find(value, propertyName);
            if (l.length > 0) {
                collected.push(l);
            }
        }
    })
    return _.flatten(collected);
}

module.exports = DeepFind;