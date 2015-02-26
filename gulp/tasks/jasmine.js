import jasmine from 'gulp-jasmine';

export default function(gulp) {
	gulp.task('jasmine', function () {
	    return gulp.src('specs/**/*.test.js')
	        .pipe(jasmine());
	});
}