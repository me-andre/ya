var _ = require('lodash');
var Backbone = require('backbone');

module.exports = Backbone.Collection.extend({
    constructor: function(options) {
        Backbone.Collection.prototype.constructor.call(this, null, options); // Java's super(null, options);
        _.defaults(this, _.pick(options, 'storage'));
        this.reset(this.storage.read(), _.extend({silent: true}));
        this.listenTo(this.storage, 'change', this.rebuild);
    },
    rebuild: function() {
        this.set(this.storage.read());
    }
});
