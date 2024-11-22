import { defineConfig } from "tsup";

export default defineConfig({
    // 忽略不需要打包的文件
    external: [
        'vite',
        /^vitepress/
    ],
    // 入口
    entry: [
        'src/theme.ts',
        'src/index.ts'
    ],
    // 类型
    dts: true,
    // 每次清空文件再打包
    clean: true,
    // 打包格式
    format: ['cjs', 'esm'],
})
