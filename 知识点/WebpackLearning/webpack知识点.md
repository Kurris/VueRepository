# Webpack 知识点

### 安装

- 安装全局webpack  ` npm install webpack@版本号 -g  ` 

- 查看当前版本 `webpack -v 查看 `

- 打包js文件 
    1. 直接在终端输入 ` webpack .\src\主要.js .\dist\bundle(打包后).js`
    2. 使用配置的方式
        - 初始化 package.json和package-lock.json文件 `npm init`
        - 在项目根目录中创建webpack.config.js 文件 

          ```js
          <!-- 导入node.js的path -->
          const path = require("path");

          <!-- 导出 -->
          module.exports = {

          <!-- 主要文件 -->
          entry: "./src/A.js",

          <!-- 生成的文件路径和名称,"__dirname 是node.js里面的静态变量" -->
          output: {
          path: path.resolve(__dirname, "dist"),
          filename: "bundle.js"
            }
          }
          ```

        - 终端使用`webpack`即可根据配置打包
        - 也可以使用package.json文件中的scripts属性,增加`"build":webpack`
        - 在终端中使用`npm run build` 等同于直接输入 `webpack`

- 安装本地webpack 

    到项目的根目录中输入    `npm install webpack@3.6.0 --save-dev`
    其中的 --save-dev指明webpack只在开发中使用,发布中将不再使用
    
