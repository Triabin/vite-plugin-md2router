import type { MarkdownEnv } from "vitepress";
import { relative } from "path"
import { Parser } from ".";

export const md2Vue = (parser: Parser, code: string, id: string) => {
    const relativePath = relative(parser.config.root ?? process.cwd(), id);
    const env: MarkdownEnv = {
        path: id,
        relativePath,
        cleanUrls: true
    };
    // 渲染成HTML
    const html = parser.md?.render(code, env);
    const { sfcBlocks } = env;
    // 转换成Vue组件
    return [
        `<template><div class="vp-doc">${html}</div></template>`,
        sfcBlocks?.scriptSetup?.content ?? '',
        ...(sfcBlocks?.styles?.map(v => v.content) ?? [])
    ].join("\n");
}
