module.exports = require('./ItemView').extend({
    template: require('../templates/allYanukochiListItem'),
    modelEvents: {
        'change': 'render'
    },
    events: {
        'click': 'watchYa'
    },
    watchYa: function() {
        require('../app').selectYanukochi(this.model);
    }
});
