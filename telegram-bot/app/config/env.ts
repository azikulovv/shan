import "dotenv/config";
import process from "process";
import * as v from "valibot";

type EnvData = v.InferOutput<typeof envSchema>;

const envSchema = v.object({
  BOT_TOKEN: v.pipe(
    v.string("Переменная BOT_TOKEN должна быть строкой!"),
    v.minLength(1, "Переменная BOT_TOKEN не найдена!"),
  ),
  ADMIN_IDS: v.pipe(
    v.string("Переменная ADMIN_IDS должна быть строкой!"),
    v.minLength(1, "Переменная ADMIN_IDS не найдена!"),
  ),
});

const safeEnv = v.safeParse(envSchema, process.env);

safeEnv.issues?.forEach((issue) => {
  throw Error(issue.message);
});

export const env = safeEnv.output as EnvData;
