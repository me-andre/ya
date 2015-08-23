var _ = require('lodash');

module.exports = _.assign({
    emitChange: function(payload) {
        this.trigger('change', payload);
    }
}, require('backbone').Events);
