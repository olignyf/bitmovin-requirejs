var gulp = require('gulp');

// include plug-ins
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var usemin = require('gulp-usemin');
var shell = require('gulp-shell');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('prep', function () {
    gulp.src(['./public/**', , '!public/css/**'])
        .pipe(gulp.dest('./prep/'));
});

// sass is disabled, but here how it would look
gulp.task('sass', function () {
    gulp.src('./public/css/*.scss')
        .pipe(watch('./public/css/*.scss'))
        .pipe(sass())
       // .pipe(autoprefix('last 40 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('./public/css'));
});


gulp.task('styles', function() {
    gulp.src(['./public/css/*.css'])
        .pipe(autoprefix('last 20 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('./prep/css/'));
});

gulp.task('usemin', function() {
  gulp.src(['index.html'])
        .pipe(usemin({
            css: [minifyCSS(), 'concat']
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('requirejs', ['prep', 'styles',], function()
{        
    var requirejs = shell(['node ../../r.js -o ../../app.build.js'],
      {quiet: false, ignoreErrors: false, cwd:"public/js"});

    var onData = function(data) {
        //done
        console.log("requirejs done", data);
    };

    return gulp.src(['app.build.js'], {read: false})
        .pipe(requirejs)
        .on('data', onData);

});


gulp.task('default', ['requirejs'], function() {

});

