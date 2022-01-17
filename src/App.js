import "./App.css";
import { useState } from "react";
import SampleComponent from "./components/SampleComponent";
import PersonCardGroup from "./components/persons/PersonCardGroup";
import MUIPlaygroundComponent from "./components/MUIPlaygroundComponent";
import MUIPersonCardGroup from "./components/muiPersons/PersonCardGroup";
import {
	Card,
	CardContent,
	CardHeader,
	MenuItem,
	TextField,
} from "@mui/material";

function App() {
	const cardColors = [
		"#a9d5da1a",
		"#f443361a",
		"#9c27b01a",
		"#673AB71a",
		"#3F51B51a",
		"#00BCD41a",
		"#0096881a",
		"#FFEB3B1a",
		"#FF57221a",
		"#7955481a",
		"#607D8B1a",
	];
	const [personsGroupTitle, setPersonsGroupTitle] = useState("Persons");
	const [personsGroupCardColor, setPersonsGroupCardColor] = useState(
		cardColors[0]
	);
	return (
		<div className="App test-class">
			Hey AJ!
			{/* 09/01/22 */}
			<SampleComponent />
			{/* 09/01/22 */}
			{/* 10/01/22 */}
			<PersonCardGroup />
			{/* 10/01/22 */}
			{/* 11/01/22 */}
			<MUIPlaygroundComponent />
			{/* 17/01/22 */}
			<Card sx={{ backgroundColor: "#03a9f41a", fontStyle: "italic" }}>
				<CardHeader title="Dynamic Binding and Styling" />
				<CardContent>
					<TextField
						label="Persons Group Title"
						value={personsGroupTitle}
						onChange={(event) =>
							setPersonsGroupTitle(event.target.value)
						}
					/>
					<TextField
						select
						label="Persons Group card color"
						value={personsGroupCardColor}
						onChange={(event) =>
							setPersonsGroupCardColor(event.target.value)
						}
					>
						{cardColors.map((option) => (
							// we can add dynamic-styling like below
							<MenuItem
								key={option}
								value={option}
								className={"card-color-" + option}
								sx={{ color: option }}
							>
								{option}
							</MenuItem>
						))}
					</TextField>
				</CardContent>
			</Card>
			{/* 17/01/22 */}
			<MUIPersonCardGroup
				personsGroupTitle={personsGroupTitle}
				personsGroupCardColor={personsGroupCardColor}
			/>
			{/* 11/01/22 */}
		</div>
	);
}

export default App;
