var _ = require('lodash');
var Composite = require('./CompositeStorage');
var constants = require('../../constants');

module.exports = AllYanukochiStorage;

function AllYanukochiStorage(app) {
    Composite.call(this);
    this.add({
        allYanukochi: app.allYanukochi,
        myYanukochi: app.myYanukochi,
        appState: app.state,
        renames: app.renames
    });
}

_.assign(AllYanukochiStorage.prototype, Composite.prototype, {
    compose: function(data) {
        var result = [this.buildYanukochi(data.myYanukochi, true, data.appState, data.renames)];
        _.each(data.allYanukochi, function(ya, name) {
            result.push(this.buildYanukochi(_.assign({name: name}, ya), false, data.appState, data.renames));
        }, this);
        return result;
    },
    buildYanukochi: function(ya, my, appState, renames) {
        ya = _.assign({
            id: 0,
            my: my
        }, ya);
        ya.selected = appState.selectedYanukochi === ya.id;
        if (!my && renames[ya.id]) {
            ya.name = renames[ya.id];
        }
        if (my) {
            ya.health = 1 - hunger(ya);
            if (ya.health > 1) ya.health = 1;
        }
        return ya;
    }
});

function hunger(ya) {
    return (new Date() - ya.creationTime) * constants.hungerGrowthFactor
         - ya.eatenLoaves * constants.loafNutritionalValue;
}
