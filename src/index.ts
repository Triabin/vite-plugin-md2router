import { type PluginOption } from 'vite';
import { type UserOptions } from "./typing";
import { Parser } from "./parser";

const MD2Vue = (options?: UserOptions): PluginOption => {
    const opt = options ?? {};
    let parser: Parser | undefined;
    return {
        name: 'md2Vue',
        async configResolved(_config) {
            parser = new Parser(_config, opt);
            await parser.setupRender();
        },

        async transform(code, id) {
            return parser?.transform(code, id);
        }
    }
}

export { MD2Vue };

export default MD2Vue;
