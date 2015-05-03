
var gulp = require('gulp');
var concat = require('gulp-concat'),
	 imagemin = require('gulp-imagemin'),
	 uglify = require('gulp-uglify'),
	 sass = require('gulp-sass'),
	 cssmin = require('gulp-cssmin'),
	 htmlmin = require('gulp-htmlmin'),
	 autoprefixer = require('gulp-autoprefixer'),
	 reactify = require('reactify'),
	 manifest = require('gulp-manifest'),
	 source = require('vinyl-source-stream'),
	 buffer = require('vinyl-buffer'),
	 browserify = require('browserify'),
	 browsersSync = require('browser-sync');


gulp.task('default',
	['index','include','style','component','img','watch']);


gulp.task('watch',function(){

	var reload = browsersSync.reload;
	browsersSync({
		server: {
      	baseDir: './app/'
      }
	});

	gulp.watch( './index.html' ,['index',reload])
	gulp.watch( './include/*.js',['include',reload]);
	gulp.watch( './scss/**/*.scss' ,['style',reload]);
	gulp.watch( './react/**/*.jsx' ,['component',reload]);
	gulp.watch( './app/*' ,['manifest']);
});

/*
*	proc index.html task
*/
gulp.task('index',function(){
	return gulp.src( './index.html' )
		.pipe(htmlmin({collapseWhitespace:true}))
		.pipe(gulp.dest('./app/'));
});

/*
*	proc included file task
*/
gulp.task('include',function(){
	return gulp.src('./include/*.js')
		.pipe(concat('plugin.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./app/'))
});

/* 
*	css preprocess task
*	stream:
*		style/scss/ => style/ => app/style.css
*	1. convert .sass to .css 
*	2. autoprefix css style
*	3. concat all .css
*/
gulp.task('style',function(){
	return gulp.src('./scss/style.scss')
		.pipe(sass({
			style: 'compressed'
		}))
		.on('error' , errorLog )
		.pipe(autoprefixer('last 2 version'))
		.pipe(concat('style.css'))
		.pipe(cssmin())
		.pipe(gulp.dest('./app/'));
});

/*
*	react convert task
*/
gulp.task('component',function(){
	var bundler = browserify('./react/main.jsx',{
		transform: ['reactify'],
		extensions: ['.jsx'],
		debug: true
	});
	bundler.bundle()
		.on('error',errorLog)
		.pipe(source('component.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest('./app/'));
});

/* 
*	image compress task
*	stream:
*		img/ => app/img/
*/
gulp.task('img',function(){
	return gulp.src('./img/**/*')
		.pipe(imagemin())
		.on('error' , errorLog )
		.pipe(gulp.dest('./app/img/'));
});

/* other function */
function errorLog(error){
	console.log(error);
	console.error.bind(error);
	this.emit('end');
}
