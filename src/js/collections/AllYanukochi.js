var Storage = require('../storages/YanukochiList');

module.exports = require('./FluxCollection').extend({
    initialize: function(__, options) {
        this.storage = new Storage(options.app);
    }
});
