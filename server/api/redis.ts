import { createClient } from "redis";

export default defineEventHandler(async (event) => {
	const client = await createClient().on("error", (err) => console.log("Redis client error", err)).connect()
  try {
    const timeStart = Date.now();

		const redisResult = await client.get("hello")
		if(redisResult) {
			return JSON.parse( redisResult )
		}

    const result = await $fetch("/api/hello");
    client.setEx("hello", 30, JSON.stringify(result));
    return { result: result, time: timeStart - Date.now() };
  } catch (e) {
    console.error(e);
    return { error: e };
  } finally {
		client.destroy()
	}
});
