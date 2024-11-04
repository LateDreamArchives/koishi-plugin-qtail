import {Context, Schema, Service} from 'koishi';
import * as qtail from 'qtail-js';

export const name = 'qtail';
export const Config = Schema.object({});
export const apply = (ctx: Context) => {
	ctx.command('qtail <nick:string> <tail:string>', '生成带有小尾巴的昵称')
		.action((_, nick, tail) => qtail.generate(nick, tail));
}
