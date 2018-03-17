import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('pages',()=>{
    return gulp.src('app/**/*.ejs')  //打开app下面所有的ejs文件（注意写法/**/*）
        .pipe(gulp.dest('server'))  //拷贝到server目录下
        .pipe(gulpif(args.watch,livereload()))  //监听到watch改变后，刷新浏览器
})
