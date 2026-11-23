export default defineEventHandler(async (event) => {
  // List all keys with

  // Set a key with
  const pushItem = await useStorage('redis').setItem('foo', 'bar')
	console.log("pushItem: ", pushItem)

	const keys = await useStorage('redis').getKeys()
	console.log("keys: ", keys)

	const item = await useStorage('redis').getItem('foo')
  // Remove a key with
  await useStorage('redis').removeItem('foo')

  return { item }
})
