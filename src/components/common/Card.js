import '../../assets/css/components/common/Card.css';

function Card(props) {
	const classes = "card " + props.className;
	return (
		// props.children allows to work this component as wrapper -> just like slots concept in vue.js
		<div className={classes}>{props.children}</div>
	);
}

export default Card;
