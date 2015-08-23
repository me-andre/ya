var h = require('virtual-dom/h');

var health = require('./bar');
var infoTemplate = require('./yaInfoTemplate');

function yaInfo(ya) {
    return ya.my ? h('.ya-info', infoTemplate(ya)) : null;
}

module.exports = function(ya) {
    return h('.ya-single', [
        h('input.ya-name', {value: ya.name}),
        health(ya.health),
        h('.ya-avatar', [
            ya.my ? h('.ya-golden-loaf') : null,
            h('.ya-avatar-frame')
        ]),
        yaInfo(ya)
    ]);
};
