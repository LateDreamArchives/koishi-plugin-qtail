import {Context, Schema} from 'koishi';
import Qtail_ from 'qtail-js';

export const name = 'qtail';
export const usage = `
# <center>qtail for koishi</center>
无需配置 点击右上角▷即开即用

## 指令语法
- \`qtail <nick:string> <tail:string>\`
- \`qt <nick:string> <tail:string>\`

栗子:
- qtail 晚梦 喵~
- qt Love-kogasa ~
`;

interface Config {
	compatibleMode: boolean;
}

export const Config: Schema<Config> = Schema.intersect([
	Schema.object({
		compatibleMode: Schema.boolean().default(true).description('兼容模式'),
	}).description('一般配置')
]);
export const apply = (ctx: Context, cfg: Config) => {
	ctx.command('qtail <nick:string> <tail:string>', '生成带有小尾巴的昵称')
		.alias('qt')
		.action((_, nick, tail) => {
			try {
				const qtail = new Qtail_(nick, tail, cfg.compatibleMode);
				_.session?.send(qtail.gen());
			} catch(e: any) {_.session?.send(`出错惹 qwq\n${e.message}`)}
		});

	ctx.set('qtail', (nick: string, tail: string, compatible: boolean) => (new Qtail_(nick, tail, compatible)).gen());
}
