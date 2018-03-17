import yargs from 'yargs';//命令行框架yargs

const args = yargs

    .option('production', {//用于判断是否是生产环境，如果没有production参数则为开发环境
        boolean: true,
        default: false,
        describe: 'min all scripts'
    })

    .option('watch', {//用于监控文件的内容的变化
        boolean: true,
        default: false,
        describe: 'watch all files'
    })
    .option('verbose',{//日志输出
        boolean:true,
        default:false,
        describe:'log'
    })


    .option('sourcemaps',{//创建sourcemaps
        describe:'create sourcemaps in force'
    })

    .option('port',{//服务器的端口
        string:true,
        default:8080,
        describe:'server port'
    })
    .argv   //输入的命令行以字符串的形式进行解析



export default args;