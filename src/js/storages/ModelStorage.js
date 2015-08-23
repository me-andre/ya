module.exports = require('backbone').Model.extend({
    read: function() {
        return this.omit();
    }
});
