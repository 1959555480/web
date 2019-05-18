#vue打包后dist文件放在服务器出现空白页面解决方式  
1.在webpack.prod.conf.js 中output  
添加参数publicPath:'./'  
  
2.在webpack.base.conf.js里 修改成  
publicPath: process.env.NODE_ENV === 'production'  
  ? './' +config.build.assetsPublicPath  
  : './' + config.dev.assetsPublicPath  
https://www.jianshu.com/p/135cfba29bad  