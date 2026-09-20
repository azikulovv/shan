import { Bot } from "grammy";
import { env } from "./common/config";
import { startHandler } from "./handlers/start.handler";

export const bot = new Bot(env.BOT_TOKEN);

startHandler();

bot.start({
  onStart: (botInfo) => {
    console.log(`[INFO] Бот запущен @${botInfo.username}`);
  },
});
