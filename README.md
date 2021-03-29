[toc]

KISBU

业务组件库

# 安装

## 如何使用KISBU开发新的kis业务项目？

```bash
npm init -y

npm install @kis/cli --save-dev

@kis/cli create app my-project-name

```

# 使用

# 开发

## 如何在KISBU中开发新的业务组件？

```bash
npm link

# 创建新的业务组件
kis-bu create new-business-component-name

# 开发项目预览
kis-bu serve

# 打包项目
kis-bu build

```

```bash
# 查看kis-bu命令行帮助
kis-bu -h, kis-bu --help
```

# 命令行

## serve

运行本地开发环境。

运行 serve 命令时，kis-bu 会通过 [webpack-dev-server](https://github.com/webpack/webpack-dev-server) 启动一个本地服务器，用于在开发过程中对文档和示例进行预览。

# 配置指南

## kisbu.config.js

kisbu.config.js中包含了 **打包配置** 和 **文档站点配置** ，请创建此文件并置于项目根目录下（kisbu-cli将以此文件所在目录作为根目录）。示例如下：

## Webpack

通过根目录下的`webpack.config.js`文件可以修改webpack配置，配置内容会通过webpack-merge合并到最终配置中。

## Babel

通过根目录下的`babel.config.js`文件可以对Bable进行配置。

## Postcss

通过根目录下的`postcss.config.js`文件可以对Postcss进行配置

### kisbu默认配置

```js
module.exports = {
  plugins: {
    autoprefixer: {},
  }
}
```

# 功能支持

- [x]  【组件库】支持组件打包
- [ ]  【文档】支持Web端浏览文档
- [ ]  【文档】支持Web端浏览移动端模拟
