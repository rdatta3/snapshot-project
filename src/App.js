import "./App.css";
import NavScroll from "./Components/NavScroll";
import GridContainer from "./Components/GridContainer";

function App() {
	return (
		<div className="App">
			<NavScroll />
			<div className="heading-container">
				<h className="heading">
					All Snaps
				</h>
			</div>
			<div className="grid-container">
				<GridContainer />
			</div>
		</div>
	);
}

export default App;
