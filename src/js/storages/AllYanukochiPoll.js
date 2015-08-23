var _ = require('lodash');
var $ = require('jquery');

module.exports = AllYanukochiPoll;

function AllYanukochiPoll() {
    _.bindAll(this, 'request');
    this.yanukochi = null;
    this.requestTimeoutId = null;
    this.request();
}

_.assign(AllYanukochiPoll.prototype, require('../mixins/changeable'), {
    read: function() {
        return this.yanukochi;
    },
    request: function() {
        var self = this;
        $.getJSON('/getAllYanukochi')
            .then(function(yanukochi) {
                self.yanukochi = yanukochi;
                self.emitChange();
                self.deferRequest();
            }, function(error) {
                self.error = error;
                self.emitChange();
                self.deferRequest();
            });
    },
    deferRequest: function() {
        this.requestTimeoutId = _.delay(this.request, 1000);
    }
});
