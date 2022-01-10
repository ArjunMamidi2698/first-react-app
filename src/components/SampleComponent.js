import "../assets/css/components/SampleComponent.css";

function SampleComponent() {
	// // only ONE root element is allowed -> if multiple requied then wrap them with a block type tag
	// return <h1>Content in SampleComponent</h1>;
	return (
		<div className="sample-component">
			<h1> H1 Content in SampleComponent </h1>
			<h2> Another text in the component </h2>
		</div>
	);
}

export default SampleComponent;
