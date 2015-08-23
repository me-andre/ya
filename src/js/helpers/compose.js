var CompositeStorage = require('../storages/CompositeStorage');

module.exports = function(storages, composer) {
    var storage = new CompositeStorage();
    storage.compose = composer;
    storage.add(storages);
    return storage;
};
