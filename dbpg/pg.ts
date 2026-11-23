import { Client } from "pg"
const client = await new Client({ connectionString: process.env['DATABASE_URL']}).connect()

const res = await client.query(`
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`)
console.log('done')

const secondQuery = await client.query(`
																			 INSERT INTO usernames (username) VALUES ('Bobby'),('Tea-rannosarus rex'),('Paul')
																			 `)

const allQueryResult = await client.query(`SELECT * FROM usernames`)
console.log(allQueryResult)
await client.end()
