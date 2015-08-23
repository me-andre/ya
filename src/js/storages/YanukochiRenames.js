var _ = require('lodash');

module.exports = YanukochiRenames;

function YanukochiRenames() {
    if (!this.read()) {
        this.save({});
    }
}

_.assign(YanukochiRenames.prototype, require('../mixins/changeable'),  {
    read: function() {
        return JSON.parse(localStorage.getItem('yanukochiRenames'));
    },
    save: function(data) {
        localStorage.setItem('yanukochiRenames', JSON.stringify(data));
    },
    add: function(id, name) {
        var data = this.read();
        data[id] = name;
        this.save(data);
        this.emitChange();
    }
});
