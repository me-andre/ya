var gulp = require('gulp'),
    _ = require('lodash'),
    g = {
        sass: require('gulp-sass'),
        autoprefixer: require('gulp-autoprefixer')
    };

_.assign(module.exports, {
    sass: function(file, root) {
        var globs = _.map(['.scss', '.sass'], function(ext) { return file + ext });
        return gulp.src(globs, {cwd: root})
            .pipe(g.sass({sourceComments: true}))
            .pipe(g.autoprefixer({browsers: ['last 2 versions']}));
    }
});
