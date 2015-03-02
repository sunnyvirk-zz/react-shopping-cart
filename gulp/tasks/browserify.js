import browserify from 'browserify';
import babelify from 'babelify';
import gulp from 'gulp';
import gulpUtil from 'gulp-util';
import path from 'path';
import source from 'vinyl-source-stream';

function getBundler() {
  return (
    browserify()
    .require("./node_modules/reflux/src/index.js", { expose: 'reflux'})
    .transform(babelify.configure({ optional: ["runtime"] }))
    .add(
      path.resolve('src/app.js'),
      { entry: true }
    )
  );
}

function update(bundler) {
  bundler  
  .bundle()
  .on('error', gulpUtil.log)
  .on('end', function() {
    return gulpUtil.log('Bundle complete');
  })
  .pipe(source('app.js'))
  .pipe(gulp.dest('public/js'));
}

export default function (gulp) {
  gulp.task('browserify', function() {
    return update(getBundler());
  });
}
