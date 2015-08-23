var h = require('virtual-dom/h');

var health = require('./bar');

function className(ya) {
    return '.ya-list-item' + (ya.selected ? '.ya-selected' : '');
}

module.exports = function(ya) {
    return h(className(ya), [
        h('.ya-name', ya.name),
        health(ya.health)
    ]);
};
