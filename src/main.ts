import {Context, Schema} from 'koishi';
import qtail from 'qtail-js';

export const name = 'qtail';
export const usage = `
# <center>qtail for koishi</center>
无需配置 点击右上角▷即开即用

## 指令语法
- \`qtail <nick:string> <tail:string>\`
- \`qt <nick:string> <tail:string>\`

栗子:
- qtail 迟梦 喵~
- qt Love-kogasa ~
`;
export const Config = Schema.object({});
export const apply = (ctx: Context) => {
	ctx.command('qtail <nick:string> <tail:string>', '生成带有小尾巴的昵称')
		.alias('qt')
		.action((_, nick, tail) => {
			try {
				const Qtail = new qtail(nick, tail, true);
				const result = Qtail.generate();
				_.session?.send(result);
			} catch(e: any) {_.session?.send(e.message)}
		});
}
