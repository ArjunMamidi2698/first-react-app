import './App.css';
import SampleComponent from './components/SampleComponent';
import PersonCardGroup from './components/persons/PersonCardGroup';
import MUIPlaygroundComponent from './components/MUIPlaygroundComponent';
import MUIPersonCardGroup from './components/muiPersons/PersonCardGroup';

function App() {
	return (
		<div className="App test-class">
			Hey AJ!
			{/* 09/01/22 */}
			<SampleComponent/>
			{/* 10/01/22 */}
			<PersonCardGroup />
			{/* 11/01/22 - Latest below */}
			<MUIPlaygroundComponent />
			<MUIPersonCardGroup />
		</div>
	);
}

export default App;
