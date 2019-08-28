/**
 * @file 页面html配置
 * @use: 动态配置html页面，获取src下每个文件下的pageinfo.json内容,解析到HtmlWebpackPlugin中
 */

const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");//生成html文件
const getPath = require("./get-path");
let htmlArr = [];
function createHtml(page_path){
	getPath(page_path).map((item)=>{
		let infoJson ={},infoData={};
		try{
			// 读取pageinfo.json文件内容，如果在页面目录下没有找到pageinfo.json 捕获异常
			infoJson = fs.readFileSync(`${page_path}/${item}/pageinfo.json`,"utf-8");//
			infoData = JSON.parse(infoJson);
		}catch(err){
			infoData = {};
		}
		htmlArr.push(new HtmlWebpackPlugin({
			title:infoData.title ? infoData.title : "CryptoYC",
			meta:{
				keywords: infoData.keywords ? infoData.keywords : "CryptoYC",
				description:infoData.description ? infoData.description : "CryptoYC"
			},
			chunks:[`${item}/${item}`], //引入的js
			template: "./src/template.html",
			filename : item == "index" ? "index.html" : `${item}/index.html`, //html位置
			minify:{//压缩html
				collapseWhitespace: true,
				preserveLineBreaks: true
			},
		}));
	});
	return htmlArr;
}


module.exports = createHtml;
