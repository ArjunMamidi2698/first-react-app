import './PersonCard.css';
import Card from '../common/Card';

function PersonCard( props ) { // parameter can be any name

    // const personName = "Arjun Mamidi";
    // let logo = personName[ 0 ];
    // if( personNameParts.length === 1 ) logo += personName[ 1 ];
    // else logo = logo += personNameParts.filter( ( val,index ) => index === personNameParts.length-1 ).map( val => val.trim().substring( 0,1 ) ).join( '' ); 
    // const age = 23;
    // const email = "aj@gmail.com";
    // const now = new Date().toUTCString(); // Cannot send date object directly

    //// can use from props instead of hardcoded
    const personName = props.name;
    const personNameParts = personName.split(' ');
    let logo = personName[ 0 ];
    if( personNameParts.length === 1 ) logo += personName[ 1 ];
    else logo = logo += personNameParts.filter( ( val,index ) => index === personNameParts.length-1 ).map( val => val.trim().substring( 0,1 ) ).join( '' ); 
    const age = props.age;
    const email = props.email;
    const now = props.date.toLocaleString(); // Cannot send date object directly
	return (
		<Card className="person-card">
			{/* <div className="person-card__logo">AJ</div> */} 
			<div className="person-card__logo">{logo.toUpperCase()}</div> {/* we can use dynamic data using {}*/}
            <div className="person-card__name">{personName}</div>
            <div className="person-card__age">{age}</div>
			<div className="person-card__email">{email}</div>
			<div className="person-card__loggedIn">Updated: {now}</div>
		</Card>
	);
}

export default PersonCard;
