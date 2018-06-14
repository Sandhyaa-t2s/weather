import React from "react";
var Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" className= "textbox"  name="city" placeholder="City..."/><br />
		<button className ="button">Search</button>
	</form>
);
export default Form;