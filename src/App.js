import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<HomePage />} />
			</Routes>
		</div>
	);
}

export default App;
