# Markdown转vue项目组件插件

**作用：** 用于将vue项目中的markdown文件直接转为vue路由组件。

**项目来源：** [B站教程](https://www.bilibili.com/video/BV1MK411277C)，项目地址[GitHub](https://github.com/aibayanyu20/vite-plugin-vitepress)，由于原项目已停止维护且不满足我的需求，遂对其进行了部分修改。

## 1、使用

```shell
npm add -D vite-plugin-md2vue
```

在`main.ts`/`main.js`中引用样式：

```ts
import "vite-plugin-vitepress/dist/theme";
```

在`vite.config.js`/`vite.config.ts`中配置插件和vue识别markdown文件：

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { MD2Vue } from '../src';

export default defineConfig({
  plugins: [ MD2Vue(), vue({ include: [/\.vue$/, /\.md$/] }) ]
})

```

## 2、配置

插件引用了vitepress的功能，所以许多配置完全可以遵循vitepress。在`vite.config.js`/`vite.config.ts`中，初始化插件时可以直接指定部分参数：

```ts
export default defineConfig({
  plugins: [MD2Vue({
    markdown: {
      lineNumbers: true, // 显示行号
      math: true,  // 支持数学公式
      codeCopyButtonTitle: '复制',  // 复制按钮显示文字
      config: (md: MarkdownIt) => {
        md.use(markdown - it插件1)
            .use(markdown - it插件2);
      }
    },
    // 其他用户参数
  }), vue({include: [/\.vue$/, /\.md$/]})]
})
```

这当中的markdown参数为`vuejs/vitepress`项目中的`MarkdownOptions`接口，详细内容可根据版本查看[原项目文件](https://github.com/vuejs/vitepress/blob/main/src/node/markdown/markdown.ts)进行其他配置。
