import { bot } from "@app/app";

export function startHandler() {
  bot.command("start", async (ctx) => {
    await ctx.reply("Привет, я <b>shan</b> бот!", { parse_mode: "HTML" });
  });
}
