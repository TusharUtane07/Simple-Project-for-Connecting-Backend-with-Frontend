import express from "express";

const app = express();

app.get("/", (req, res) => {
	res.send("GET request to the homepage");
});

app.get("/jokes", (req, res) => {
	const jokes = [
		{
			id: 1,
			title: "The Drowning Lawyer",
			joke: "Why did the lawyer go to the bottom of the ocean? Because he wanted to become a 'barrister'!",
		},
		{
			id: 2,
			title: "The Shy Computer",
			joke: "Why was the computer cold? It left its Windows open!",
		},
		{
			id: 3,
			title: "The Cat's Job Interview",
			joke: "Why did the cat wear a fancy suit to the job interview? Because it wanted to look 'purr-fessional'!",
		},
		{
			id: 4,
			title: "The Musical Toilet",
			joke: "Why did the toilet paper roll down the hill? To get to the bottom! But why did the toilet roll up the hill? Because it wanted to be a 'roll' model!",
		},
		{
			id: 5,
			title: "The Forgetful Elephant",
			joke: "Why don't elephants use computers? They're afraid of the mouse!",
		},
	];
	res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log("Port running on: ", port);
});
