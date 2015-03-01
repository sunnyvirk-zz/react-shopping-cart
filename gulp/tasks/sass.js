import sass from 'gulp-sass';
import neat from 'node-neat';
import autoprefix from 'gulp-autoprefixer';

export default function (gulp) {
  let isDev   = process.env.NODE_ENV !== 'production';
  let outputStyle = isDev ? 'nested' : 'compressed';
  let srcFiles = ['assets/styles/**/*.scss', 'components/**/*.scss'];

  let build = () => {
    gulp
    .src(srcFiles)
    .pipe(sass({
      includePaths: neat.includePaths,
      outputStyle: outputStyle
    }))
    .pipe(autoprefix({
      browsers: ['last 5 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./public/css'));
  };

  gulp.task('sass', build);
  
}
