var _ = require('lodash');

module.exports = CompositeStorage;

function CompositeStorage() {
    this.storages = {};
}

_.assign(CompositeStorage.prototype, require('../mixins/changeable'), {
    read: function() {
        var data = _.mapValues(this.storages, function(storage) {
            return storage.read();
        });
        return this.compose(data);
    },
    compose: function(data) {
        return data;
    },
    add: function(storages) {
        _.assign(this.storages, storages);
        _.each(storages, this.subscribe, this);
    },
    subscribe: function(storage) {
        this.listenTo(storage, 'change', _.bind(this.onStorageChange, this, storage));
    },
    isChangeRelevant: function(storage, eventPayload) {
        return true;
    },
    onStorageChange: function(storage, eventPayload) {
        if (this.isChangeRelevant(storage, eventPayload)) {
            this.emitChange();
        }
    }
});
