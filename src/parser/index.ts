import { createMarkdownRenderer, MarkdownRenderer } from 'vitepress';
import type { ResolvedConfig } from "vite";
import { UserOptions } from "../typing";
import { md2Vue } from "./md2vue";

export class Parser {
    public md: MarkdownRenderer | undefined;

    constructor(public readonly config: ResolvedConfig, public readonly options: UserOptions) {}

    public async setupRender() {
        const srcDir = this.config.root ?? process.cwd();
        const base = this.config.base ?? '/';
        this.md = await createMarkdownRenderer(srcDir, this.options.markdown, base);
    }

    public async transform(code: string, id: string) {
        if (id.endsWith('.md')) {
            return md2Vue(this, code, id);
        }
    }
}
