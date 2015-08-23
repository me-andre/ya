module.exports = require('./ItemView').extend({
    template: require('../templates/singleYanukochi'),
    modelEvents: {
        'change': 'preserveNameInput render'
    },
    events: {
        'change .ya-name': 'renameYanukochi',
        'click .ya-golden-loaf': 'feedYanukochi'
    },
    renameYanukochi: function(e) {
        require('../app').renameYanukochi(this.model.omit(), e.target.value);
    },
    preserveNameInput: function() {
        this.state.set({name: this.$('.ya-name').val()});
    },
    feedYanukochi: function() {
        require('../app').feedYanukochi(this.model.omit());
    }
});
