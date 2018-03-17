import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args';

gulp.task('browser',(cb)=>{
 if(!args.watch){
     return cb();
 }


 //如果发现.js文件变动，那么执行tasks下面的scripts.js文件
 gulp.watch('app/**/*.js',['scripts']);

 gulp.watch('app/**/*.ejs',['pages']);
 gulp.watch('app/**/*.css',['css']);

});
