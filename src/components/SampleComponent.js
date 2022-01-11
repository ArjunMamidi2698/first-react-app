import React from "react";
import "./SampleComponent.css";

function SampleComponent() {
	// // only ONE root element is allowed -> if multiple requied then wrap them with a block type tag
	// return <h1>Content in SampleComponent</h1>;

	//// this will happen in the background -> need to import React from 'react'
	return React.createElement(
		"div",
		{ className: "sample-component" },
		React.createElement("h1", {}, "H1 Content in SampleComponent"),
		React.createElement("h2", {}, "Another text in the component!")
	);
	// return (
	// 	<div className="sample-component">
	// 		<h1> H1 Content in SampleComponent </h1>
	// 		<h2> Another text in the component </h2>
	// 	</div>
	// );
}

export default SampleComponent;
