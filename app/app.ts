import { Bot } from "grammy";
import { env } from "./common/config";

export const bot = new Bot(env.BOT_TOKEN);

bot.command("start", (ctx) => {
  ctx.reply("text");
});

bot.start({
  onStart: () => {
    console.log("Bot is running");
  },
});
