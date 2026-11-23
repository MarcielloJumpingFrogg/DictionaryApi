import { defineEventHandler, readBody } from "nuxt/server";
import {db, schema } from '@nuxthub/db'



export default defineEventHandler(async (event) => {
	//const database = new DatabaseSync("./db/users.db");

	const query = db.query.users.findMany()

	return query.body
});
