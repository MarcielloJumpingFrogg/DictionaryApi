import { defineEventHandler } from "nuxt/server";

export default defineEventHandler(async (event) => {
  const response = [
    {
      id: "1",
      name: "1",
      description: "1",
      number: 1,
      favoriteFood: 1,
      pizza: 1,
    },
		{
      id: "2",
      name: "2",
      description: "2",
      number: 2,
      favoriteFood: 2,
      pizza: 2,
    },
		{
      id: "3",
      name: "3",
      description: "3",
      number: 3,
      favoriteFood: 3,
      pizza: 3,
    },
		{
      id: "4",
      name: "4",
      description: "4",
      number: 4,
      favoriteFood: 4,
      pizza: 4,
    },
		{
      id: "5",
      name: "5",
      description: "5",
      number: 5,
      favoriteFood: 5,
      pizza: 5,
    },
		{
      id: "6",
      name: "6",
      description: "6",
      number: 6,
      favoriteFood: 6,
      pizza: 6,
    },
		{
      id: "7",
      name: "7",
      description: "7",
      number: 7,
      favoriteFood: 7,
      pizza: 7,
    },
  ];

	await new Promise(r => setTimeout(r, 2000))

	return response
});
