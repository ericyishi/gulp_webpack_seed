import gulp from 'gulp';//整个基础的构建是基于gulp之上的
import gulpif from 'gulp-if';//gulp语句的判断
import concat from 'gulp-concat';//处理文件拼接的
import webpack from 'webpack';//用webpack来处理
import gulpWebpack from 'webpack-stream';//webpack结合webpack-stream（因为gulp输出都是文件流）做处理
import named from 'vinyl-named';//对重命名做标志
import livereload from 'gulp-livereload';//自动刷新
import plumber from 'gulp-plumber';//处理文件信息流
import rename from 'gulp-rename';//对文件重命名
import uglify from 'gulp-uglify';//压缩js、css
import {log,colors} from 'gulp-util';//命令行输出的样式
import args from './util/args';//对命令行解析

gulp.task('scripts',()=>{//创建一个任务
  return gulp.src(['app/js/index.js'])   //这里目标只是index.js，以此作用入口函数，其他地方要import进来
      .pipe(plumber({
          errorHandle:function(){

          }
      }))
      .pipe(named())  //对文件重命名
      .pipe(gulpWebpack({   //对文件用webpack编译
          module:{
              loaders:[{
                  test:/\.js$/,  //遇到js用babel处理
                  loader:'babel-loader'
              }]
          }
      }),null,(err,stats)=>{
          log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
              chunks:false
          }))
      })
      .pipe(gulp.dest('server/public/js'))//输出的路径
      .pipe(rename({   //复制一份命名为cp.min.js用于压缩
          basename:'cp',
          extname:'.min.js'
      }))
      .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
      .pipe(gulp.dest('server/public/js'))//输出路径
      .pipe(gulpif(args.watch,livereload()))//判断文件里面有watch参数那么就刷新浏览器
})
