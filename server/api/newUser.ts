import { defineEventHandler, readBody } from "nuxt/server";
import {db, schema } from '@nuxthub/db'



export default defineEventHandler(async (event) => {
	//const database = new DatabaseSync("./db/users.db");

  const body: {username: string, password: string} = await readBody(event);
	console.log('body: ', body)
	if(!body || typeof body.username != "string" || typeof body.password != "string"  ) {
		return 400
	}

	const username = body.username
	const password = body.password
	const result = await db.insert(schema.users).values({username: username, password: password}).returning()


	const query = db.query.users.findMany()
	console.log(query.body)

	return query.body
});
