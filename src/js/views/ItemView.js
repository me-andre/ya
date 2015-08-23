var _ = require('lodash');
var Marionette = require('backbone.marionette');

var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');

var ModelStorage = require('../storages/ModelStorage');

function renderVTree() {
    return this.template(this.serializeData());
}

module.exports = Marionette.ItemView.extend({
    constructor: function(options) {
        this.state = new ModelStorage();
        Marionette.ItemView.call(this, options);
    },
    _ensureElement: function () {
        this.vTree = renderVTree.call(this);
        this.setElement(createElement(this.vTree));
    },
    serializeData: function() {
        return _.assign(Marionette.ItemView.prototype.serializeData.call(this), this.state.read());
    },
    _renderTemplate: function () {
        var prevVTree = this.vTree;
        this.vTree = renderVTree.call(this);
        patch(this.el, diff(prevVTree, this.vTree));
        return this;
    }
});
