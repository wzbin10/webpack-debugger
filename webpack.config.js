const path = require('path');//引入node的path模块
const htmlWebpackPlugins = require('html-webpack-plugin');//将html打包

module.exports={
	// 入口文件的配置项：配置入口文件的地址，可以是单一入口，也可以是多入口
    entry:{
		index:'./src/index.js'  // 配置入口 JS：里面的index是文件名
	},   
	// 出口文件的配置项：配置出口文件的地址，在webpack2.X版本后，支持多出口配置
    output:{
		// [name] 可自行配置，参考文档;[hash:4] 使用 hash 取前 4 位
		filename: 'js/[name]-[hash:4].js',    //打包的文件名称
		path:path.resolve(__dirname,'dist'),    // 打包的出口路径
	},  
	// 配置模块：主要是解析CSS和图片转换压缩等功能
    module:{
		rules:[
			{
				test:/\.html$/, // 正则匹配 html 文件
				use:[
					{
						loader: 'html-loader' // 引入 html 文件加载插件
					}
				]
			},
			{
				test:/\.css$/, // 正则匹配 css 文件
				use:[
					{
						loader: 'style-loader' // 引入 style 文件加载插件
					},
					{
						loader: 'css-loader' // 引入 css 文件加载插件
					}
				]
			}
		]
	},  
	// 配置插件：根据你的需要配置不同功能的插件
    plugins:[
		new htmlWebpackPlugins({
		  filename: 'index.html', // 输出文件名
		  template: 'src/index.html', // 所引用模板文件位置
		  inject: 'body' // js 文件插入的位置
		}),
	], 
	// 配置webpack开发服务功能
    devServer:{
		contentBase: path.resolve(__dirname,'dist'),    // 服务器基本运行路径：用于找到程序打包地址
		compress:true, // 服务端压缩是否开启（服务器端压缩选型，一般设置为开启）
		host:'localhost', // 服务器的IP地址，可以使用IP也可以使用localhost
		port:8080, // 配置服务端口号
		open:true  //自动打开页面
	}    
}