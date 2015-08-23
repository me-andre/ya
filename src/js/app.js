var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var AllYanukochiPoll = require('./storages/AllYanukochiPoll');
var MyYanukochi = require('./storages/MyYanukochi');
var YanukochiRenames = require('./storages/YanukochiRenames');
var ModelStorage = require('./storages/ModelStorage');

var AllYanukochiCollection = require('./collections/AllYanukochi');

var AllYanukochiListView = require('./views/AllYanukochiList');
var SingleYanukochiView = require('./views/SingleYanukochi');

var app = {
    init: function($root) {
        this.allYanukochi = new AllYanukochiPoll();
        this.myYanukochi = new MyYanukochi();
        this.renames = new YanukochiRenames();
        this.state = new ModelStorage();

        this.mainRegion = new Marionette.Region({
            el: $root.find('.main')
        });
        this.sideRegion = new Marionette.Region({
            el: $root.find('.aside')
        });

        var allYaView = new AllYanukochiListView({
            collection: new AllYanukochiCollection({app: this})
        });

        this.sideRegion.show(allYaView);
    },
    selectYanukochi: function(yaModel) {
        this.state.set({selectedYanukochi: yaModel.get('id')});
        var view = new SingleYanukochiView({
            model: yaModel
        });
        this.mainRegion.show(view);
    },
    renameYanukochi: function(ya, name) {
        if (ya.my) {
            this.myYanukochi.rename(name);
        } else {
            this.renames.add(ya.id, name);
        }
    },
    feedYanukochi: function(ya) {
        if (ya.my) this.myYanukochi.eatLoaf();
    }
};

module.exports = app;
