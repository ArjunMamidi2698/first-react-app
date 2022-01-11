import './App.css';
import SampleComponent from './components/SampleComponent';
import PersonCardGroup from './components/persons/PersonCardGroup';
import MUIPlaygroundComponent from './components/MUIPlaygroundComponent';
import MUIPersonCardGroup from './components/muiPersons/PersonCardGroup';

function App() {
	return (
		<div className="App test-class">
			Hey AJ!
			<SampleComponent/>
			<PersonCardGroup />
			<MUIPlaygroundComponent />
			{/* Latest below */}
			<MUIPersonCardGroup />
		</div>
	);
}

export default App;
