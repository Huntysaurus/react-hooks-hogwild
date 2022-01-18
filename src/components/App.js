import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import HogTiles from "./HogTiles";

function App() {

	console.log(hogs)

	return (
		<div className="App">
			<Nav />
			<HogTiles hogs={hogs}/>
		</div>
	);
}

export default App;
