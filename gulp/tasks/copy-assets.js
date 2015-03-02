import merge from 'merge-stream';

export default function (gulp) {
  gulp.task('copy-assets', ['sass'], () => {
    return merge(
      gulp
      .src('./assets/libs/**/*.js')
      .pipe(gulp.dest('./public/libs')),

      gulp
      .src('./assets/img/**/*')
      .pipe(gulp.dest('./public/img'))

    );
  });
}
