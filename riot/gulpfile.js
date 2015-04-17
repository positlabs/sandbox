var gulp = require('gulp');
var riot = require('gulp-riot');

function riotTask(){
	return gulp.src('src/tags/**/*.tag')
		.pipe(riot({
			// compact: true
		}))
		.pipe(gulp.dest('dist/tags'));
}
gulp.task('riot', riotTask);

function copyTask(){
	return gulp.src([
			'src/index.html'
		])
		.pipe(gulp.dest('dist'));
}
gulp.task('copy', [], copyTask);

gulp.task('watch', ['default'], function(){
	gulp.watch('src/tags/**/*.tag', riotTask);
	gulp.watch('src/*.html', copyTask);
});

gulp.task('default', ['riot', 'copy'], function(){});