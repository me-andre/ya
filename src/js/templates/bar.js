var h = require('virtual-dom/h');

function barColor(progress) {
    return [
        255 * (1 - progress) | 0,
        255 * progress | 0,
        255 / 2 | 0
    ];
}

function barStyle(progress) {
    return {
        transform: 'translate3d(' + (progress - 1) * 100 + '%,0,0)',
        'background-color': 'rgba(' + barColor(progress).join(',') + ',1)'
    };
}

module.exports = function(progress) {
    return h('.bar-track',
        h('.bar-bar', {style: barStyle(progress)})
    );
};
