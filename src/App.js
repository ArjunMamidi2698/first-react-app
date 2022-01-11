import './App.css';
import SampleComponent from './components/SampleComponent';
import PersonCardGroup from './components/persons/PersonCardGroup';

function App() {
	return (
		<div className="App test-class">
			Hey AJ!
			<SampleComponent/>
			<PersonCardGroup />
		</div>
	);
}

export default App;
