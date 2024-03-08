import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
	const [jokes, setJokes] = useState([]);

	useEffect(() => {
		axios
			.get("/jokes")
			.then((res) => {
				console.log(res.data);
				setJokes(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div>
			<h1>Welcome, Have fun and take a look at amazing Jokes.</h1>
			{jokes.map((item) => {
				return (
					<div key={item.id}>
						<p>{item.title}</p>
						<p>{item.joke}</p>
					</div>
				);
			})}
		</div>
	);
};

export default App;
