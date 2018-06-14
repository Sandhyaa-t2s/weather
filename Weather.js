import React from "react";
var Weather = props => (
	<div className="box">
	 {	
	 	props.city &&<p>Location: 
	 	<span>{props.city}</span></p> 
	 }
	 { 	
	 	props.temperature && <p>Temperature: 
	 	<span>{props.temperature+" C"}</span></p> 
	 }
	 { 
	 	props.error && <p>{props.error}</p>  
	 }
	</div> 
	);
export default Weather;