import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';


gulp.task('css',()=>{
    return gulp.src('app/**/*.css')////打开app下面所有的css文件
        .pipe(gulp.dest('server/public'))
        .pipe(gulpif(args.watch,livereload()))

})