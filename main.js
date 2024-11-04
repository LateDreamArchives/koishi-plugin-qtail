"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apply = exports.Config = exports.name = void 0;
var koishi_1 = require("koishi");
var qtail = require("qtail-js");
exports.name = 'qtail';
exports.Config = koishi_1.Schema.object({});
var apply = function (ctx) {
    ctx.command('qtail <nick:string> <tail:string>', '生成带有小尾巴的昵称')
        .action(function (_, nick, tail) { return qtail.generate(nick, tail); });
};
exports.apply = apply;
