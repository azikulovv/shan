import { env } from "@app/config";
import { startHandler } from "@app/handlers/start.handler";
import { Bot } from "grammy";

export const bot = new Bot(env.BOT_TOKEN);

startHandler();

bot.start({
  onStart: (botInfo) => {
    console.log(`[INFO] Бот запущен @${botInfo.username}`);
  },
});
