var _ = require('lodash');

module.exports = MyYanukochi;

function MyYanukochi() {
    var data = this.read();
    if (!data) {
        this.save({
            name: 'unnamed',
            creationTime: +new Date(),
            eatenLoaves: 0
        });
    }
    _.bindAll(this, 'emitChange');
    setInterval(this.emitChange, 500);
}

_.assign(MyYanukochi.prototype, require('../mixins/changeable'), {
    read: function() {
        return JSON.parse(localStorage.getItem('myYanukochi'));
    },
    save: function(ya) {
        localStorage.setItem('myYanukochi', JSON.stringify(ya));
        this.emitChange();
    },
    rename: function(name) {
        var ya = this.read();
        ya.name = name;
        this.save(ya);
    },
    eatLoaf: function() {
        var ya = this.read();
        ya.eatenLoaves++;
        this.save(ya);
    }
});
