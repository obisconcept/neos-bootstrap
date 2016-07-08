// Grab packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify'),
    watch = require('gulp-watch'),
    cleanCSS = require('gulp-clean-css');

// Create build css task
gulp.task('build-css', function() {

    gutil.log('Generate css files ...');

    // Bootstrap main css files
    gulp.src('Resources/Private/Assets/Styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(gulp.dest('Resources/Public/Styles'))
        .pipe(rename('main.min.css'))
        .pipe(cleanCSS())
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('Resources/Public/Styles'));

    // Bootstrap main backend half css files
    gulp.src('Resources/Private/Assets/Styles/main-backend-half.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(gulp.dest('Resources/Public/Styles'))
        .pipe(rename('main-backend-half.min.css'))
        .pipe(cleanCSS())
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('Resources/Public/Styles'));

    // Bootstrap main backend full css files
    gulp.src('Resources/Private/Assets/Styles/main-backend-full.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(gulp.dest('Resources/Public/Styles'))
        .pipe(rename('main-backend-full.min.css'))
        .pipe(cleanCSS())
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('Resources/Public/Styles'));

});

// Create build js task
gulp.task('build-js', function() {

    gutil.log('Generate js files ...');

    // Bootstrap js files
    gulp.src([
        'Resources/Private/Assets/JavaScript/jquery.js',
        'Resources/Private/Assets/JavaScript/bootstrap.js'
    ])
        .pipe(sourcemaps.init())
        .pipe(concat('bootstrap.js'))
        .pipe(gulp.dest('Resources/Public/JavaScript'))
        .pipe(rename('bootstrap.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('Resources/Public/JavaScript'));

    // Bootstrap backend full js files
    gulp.src([
        'Resources/Private/Assets/JavaScript/jquery.js',
        'Resources/Private/Assets/JavaScript/bootstrap-backend-full.js'
    ])
        .pipe(sourcemaps.init())
        .pipe(concat('bootstrap-backend-full.js'))
        .pipe(gulp.dest('Resources/Public/JavaScript'))
        .pipe(rename('bootstrap-backend-full.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('Resources/Public/JavaScript'));

    // Bootstrap backend half js files
    gulp.src([
        'Resources/Private/Assets/JavaScript/jquery.js',
        'Resources/Private/Assets/JavaScript/bootstrap-backend-half.js'
    ])
        .pipe(sourcemaps.init())
        .pipe(concat('bootstrap-backend-half.js'))
        .pipe(gulp.dest('Resources/Public/JavaScript'))
        .pipe(rename('bootstrap-backend-half.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('Resources/Public/JavaScript'));

});

// Create default task
gulp.task('default', function() {

    gulp.src('Resources/Private/Assets/Styles/**/*.scss', {read: false})
        .pipe(watch('Resources/Private/Assets/Styles/**/*.scss', function() {
            gulp.start('build-css');
        }))
        .pipe(notify({
            'title': 'Neos CMS Bootstrap Package',
            'message': 'CSS files were generated'
        }));

    gulp.src('Resources/Private/Assets/JavaScript/**/*.js', {read: false})
        .pipe(watch('Resources/Private/Assets/JavaScript/**/*.js', function() {
            gulp.start('build-js');
        }))
        .pipe(notify({
            'title': 'Neos CMS Bootstrap Package',
            'message': 'JavaScript files were generated'
        }));

});