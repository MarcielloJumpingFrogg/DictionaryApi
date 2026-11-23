import { defineEventHandler, readBody } from "nuxt/server";
import { db, schema } from "@nuxthub/db";

import { Client } from "pg";

//export default defineEventHandler(async (event) => {
//	//const database = new DatabaseSync("./db/users.db");
//
//  const body: {username: string, password: string} = await readBody(event);
//	console.log('body: ', body)
//	if(!body || typeof body.username != "string" || typeof body.password != "string"  ) {
//		return 400
//	}
//
//	const username = body.username
//	const password = body.password
//	const result = await db.insert(schema.users).values({username: username, password: password}).returning()
//
//
//	const query = db.query.users.findMany()
//	console.log(query.body)
//
//	return query.body
//});

export default defineEventHandler(async (event) => {
  try {
		const client = await new Client({ connectionString: process.env["DATABASE_URL"] }).connect();

    const res = await client.query(`
CREATE TABLE IF NOT EXISTS users_api (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
	password VARCHAR ( 255 )
);

INSERT INTO users_api (username, password) 
VALUES
  ('Bryan', 'DoggoGood'),
  ('Odin', 'DoggoBad'),
  ('Damon', 'CatGoodest');
`);

    const allQueryResult = await client.query(`SELECT * FROM users_api`);
    console.log(allQueryResult);
    await client.end();
  } catch (e) {
		console.error('Error: ', e)
		return 400
	}
  return 200;
});
