import React from "react";
import { Grid, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { Add, AddCircleOutlineRounded } from "@mui/icons-material";

const MUIPlaygroundComponent = () => {
	return (
		<Grid container sx={{ color: "gray", border: "2px solid red" }}>
			<Grid item xs={12} sx={{ color: "blue", border: "2px solid red" }}>
				<EditIcon />
				<Add />
				<AddCircleOutlineRounded />
			</Grid>
			<Grid item xs={6} sx={{ color: "blue", border: "2px solid red" }}>
				<Typography>More</Typography>
				<Typography>More</Typography>
				<Typography>More</Typography>
				<Typography>More</Typography>
				<Typography>More</Typography>
			</Grid>
			<Grid item xs={5} sx={{ color: "green", border: "2px solid red" }}>
				<Typography>More</Typography>
				<Typography>More</Typography>
				<Typography>More</Typography>
				<Typography>More</Typography>
				<Typography>More</Typography>
			</Grid>
			<Grid item xs={3} sx={{ color: "blue", border: "2px solid red" }}>
				<Typography>More</Typography>
				<Typography>More</Typography>
				<Typography>More</Typography>
				<Typography>More</Typography>
				<Typography>More</Typography>
			</Grid>
			<Grid item xs={6} sx={{ color: "green", border: "2px solid red" }}>
				<Typography>More</Typography>
				<Typography>More</Typography>
				<Typography>More</Typography>
				<Typography>More</Typography>
				<Typography>More</Typography>
			</Grid>
		</Grid>
	);
};

export default MUIPlaygroundComponent;
