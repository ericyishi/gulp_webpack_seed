import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';//启动服务器的包
import args from './util/args';

gulp.task('serve',(cb)=>{
    if(!args.watch) return cb();
    //如果不是出于监听状态下，返回回调函数，否则创建服务器
    var server=liveserver.new(['--harmony','server/bin/www']);//harmony参数代表:要在当前命令行下执行后面的脚本
    server.start();//启动服务器


    //监听下面文件，有变动刷新
    gulp.watch(['server/public/**/*.css','server/public/**/*.js','server/views/**/*.ejs'],function(file){
       server.notify.apply(server,[file]);
    });

    //监听下面文件，有变化重启服务
    gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
        server.start.bind(server)()
    });
})
