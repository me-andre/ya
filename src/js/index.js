//var _ = require('lodash');
//
//var diff = require('virtual-dom/diff');
//var patch = require('virtual-dom/patch');
//var createElement = require('virtual-dom/create-element');
//var h = require('virtual-dom/h');
var Backbone = require('backbone');
//var M = require('backbone.marionette');
//var VNode = require('virtual-dom/vnode/vnode');
////
////function template(data) {
////    return [h('.alias', [data.alias, h('.someDiv')])];
////}
//
//function rootNode(tagName, attributes, children) {
//    return new VNode(tagName, attributes, children);
//}
//
//global.model = new Backbone.Model({
//    alias: 'prof'
//});
//
////var el;
////var vTree;
////var renderRootNode;
//
////function initialRender(data) {
////    renderRootNode = _.partial(rootNode, 'div', 'cls', {});
////    vTree = renderRootNode([]);
////    el = createElement(vTree);
////    document.body.appendChild(el);
////    render(data);
////}
////
////function render(data) {
////    var prevVTree = vTree;
////    vTree = renderRootNode(template(data));
////    patch(el, diff(prevVTree, vTree));
////}
//
////var View = Backbone.View.extend({
////    template: template,
////    _ensureElement: function() {
////        if (!this.el) {
////            var attrs = _.extend({}, _.result(this, 'attributes'));
////            if (this.id) attrs.id = _.result(this, 'id');
////            if (this.className) attrs.className = _.result(this, 'className');
////            this.renderRootNode = _.partial(rootNode, _.result(this, 'tagName'), attrs);
////            this.vTree = this.renderRootNode([]);
////            this.setElement(createElement(this.vTree));
////        } else {
////            this.setElement(_.result(this, 'el'));
////        }
////    },
////    initialize: function(options) {
////        this.listenTo(options.model, 'change', this.render);
////    },
////    render: function() {
////        var data = this.getTemplateContext();
////        var prevVTree = this.vTree;
////        this.vTree = this.renderRootNode(this.template(data));
////        patch(this.el, diff(prevVTree, this.vTree));
////    },
////    getTemplateContext: function() {
////        return this.model.omit();
////    }
////});
//
//var View = M.ItemView.extend({
//    tagName: 'li',
//    className: 'wow',
//    //template: template,
//    modelEvents: {
//        'change': 'render'
//    },
//    _ensureElement: function() {
//        if (!this.el) {
//            var attrs = _.extend({}, _.result(this, 'attributes'));
//            if (this.id) attrs.id = _.result(this, 'id');
//            if (this.className) attrs.className = _.result(this, 'className');
//            this.renderRootNode = _.partial(rootNode, _.result(this, 'tagName'), attrs);
//            this.vTree = this.renderRootNode([]);
//            this.setElement(createElement(this.vTree));
//        } else {
//            this.setElement(_.result(this, 'el'));
//        }
//    },
//    _renderTemplate: function() {
//        var data = this.mixinTemplateHelpers(this.serializeData());
//        var prevVTree = this.vTree;
//        this.vTree = this.renderRootNode(this.template(data));
//        patch(this.el, diff(prevVTree, this.vTree));
//        return this;
//    }
//});
//
//var ListView = M.CollectionView.extend({
//    tagName: 'ol',
//    childView: require('./views/Yanyk')
//});
//
//global.collection = new Backbone.Collection([
//    {alias: 'prof'},
//    {alias: ':((('}
//]);
//
//var YaView =
//
//global.view = new ListView({
//    collection: collection
//});

//var Marionette = require('backbone.marionette');

Backbone.$(function($) {
    var app = require('./app');
    app.init($(document.body));
});
