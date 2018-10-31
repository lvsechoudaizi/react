# react
基于webpack的react项目搭建完整版

做个记录:
webpack学习记录：
（打包工具）
webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图
(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle

四个核心概念：入口entry、输出output、模块loader、插件plugin

入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始
{
  entry: [
    "@babel/polyfill",  //添加该句子：低版本的浏览器中就可以正常打开页面
    path.resolve(__dirname, '../src/index.js'), //定义入口
  ],
}
出口：output 选项可以控制 webpack 如何向硬盘写入编译文件。注意，即使可以存在多个入口起点，但只指定一个输出配置。
{
  output: {
    filename: 'bundle.js',  //filename 用于输出文件的文件名
    path: '/home/proj/public/assets',  //目标输出目录 path 的绝对路径
    publicPath:'' //最终输出文件
  }
}

loader:loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack 的打包能力，对它们进行处理
loader 可以使你在 import 或"加载"模块时预处理文件。因此，loader 类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的强大方法。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript，
或将内联图像转换为 data URL。loader 甚至允许你直接在 JavaScript 模块中 import CSS文件！

在更高层面，在 webpack 的配置中 loader 有两个目标：

test 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件。(需要转换的文件)
use 属性，表示进行转换时，应该使用哪个 loader。（）

module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
  
plugins插件：插件是 webpack 的支柱功能。webpack 自身也是构建于，你在 webpack 配置中用到的相同的插件系统之上！
(插件目的在于解决 loader 无法实现的其他事)
{
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),  //在 webpack 配置中，向 plugins 属性传入 new 实例
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
}

mode模式:告知 webpack 使用相应模式的内置优化

resolver模块解析 ：

webpack的完整配置：
var path = require('path');

module.exports = {
  mode: 'development',
  entry: './foo.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js'
  }
};

eslint学习记录：
（代码检测工具）
目的是提供一个插件化的javascript代码检测工具,ESLint 是在 ECMAScript/JavaScript 代码中识别和报告模式匹配的工具，它的目标是保证代码的一致性和避免错误

eslint --init适用于对某个项目进行设置和配置 ESLint

eslint中有很多的规则：在rules中定义
{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}
"semi" 和 "quotes" 是 ESLint 中 规则 的名称。第一个值是错误级别，可以使下面的值之一：

"off" or 0 - 关闭规则
"warn" or 1 - 将规则视为一个警告（不会影响退出码）
"error" or 2 - 将规则视为一个错误 (退出码为1)

完整的eslint配置
文件名：.eslintrc.*
{
  "env": {  //定义了一组预定义的全局变量，使用 env 关键字指定你想启用的环境，并设置它们为 true
    "browser": true,
    "node": true,
    "es6": true  //自动启用 ES6 语法支持
  },
  "parserOptions": { //解析器选项可以在 parserOptions 属性设置
    "ecmaVersion": 6,   //指定你想要使用的 ECMAScript 版本
    "sourceType": "module",  // 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
    "ecmaFeatures": {  //这是个对象，表示你想使用的额外的语言特性
      "jsx": true  //启用 JSX
    }
  },
  "parser":"babel-eslint",//ESLint 默认使用Espree作为其解析器，你可以在配置文件中指定一个不同的解析器
  "globals": { //当访问当前源文件内未定义的变量时，no-undef 规则将发出警告。如果你想在一个源文件里使用全局变量，推荐你在 ESLint 中定义这些全局变量
        "var1": true,
        "var2": false  //var1 允许被重写，var2 不允许被重写。
    },
    "plugins":[  //ESLint 支持使用第三方插件。在使用插件之前，你必须使用 npm 安装它
      "react"
    ],
    "rules":{  //规则。你可以使用注释或配置文件修改你项目中要使用的规则
        //注释规则
        /* eslint eqeqeq: "off", curly: "error" */
        "eqeqeq": "off",  //关闭规则
        "curly": "error",  //定义为错误级别的错误
        "quotes": ["error", "double"], //规则 quotes 指定了 “double”选项。数组的第一项总是规则的严重程度（数字或字符串）
        "plugin1/rule1": "error"  //配置定义在插件中的一个规则的时候，你必须使用 插件名/规则ID 的形式
        //当指定来自插件的规则时，确保删除 eslint-plugin- 前缀。ESLint 在内部只使用没有前缀的名称去定位规则
    },
    "settings": {  //ESLint 支持在配置文件添加共享设置。你可以添加 settings 对象到配置文件，它将提供给每一个将被执行的规则
        "sharedData": "Hello"
    },
    "extends": [ //继承 从基础配置中继承已启用的规则。
      "airbnb",
      "plugin:prettier/recommended"  //plugins 属性值 可以省略包名的前缀 eslint-plugin-,组成：plugin:包名 (省略了前缀，比如，react)/配置名称 (比如 recommended)
    ]
}

在项目根目录创建一个 .eslintignore 文件告诉 ESLint 去忽略特定的文件和目录
