import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Add } from "./Pages/Add";
import { Filter } from "./Pages/Filter";
import { useState, useEffect } from "react";
import { IVehicle } from "../Types/Vehicle";
import { api } from "./Helper/HelperFunction";

function App(): JSX.Element {
	const [cards, setCards] = useState<IVehicle[] | []>([]);

	async function getData() {
		const dados = await api.get<IVehicle[]>("/");
		if (dados.data && dados.data !== cards) {
			setCards(dados.data);
		}
	}

	useEffect(() => {
		getData();
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home cards={cards} setCards={setCards} />} />
				<Route
					path="create"
					element={<Add id={0} setId={undefined} setCards={setCards} />}
				/>
				<Route
					path="filter"
					element={<Filter cards={cards} setCards={setCards} />}
				/>
				<Route path="/*" element={<Navigate to={"/"} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
