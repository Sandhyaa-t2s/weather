import React from 'react';
import Form from "./Form.js";
import Weather from "./Weather.js";
import logo from './wea1.png';
import './App.css';
class App extends React.Component {
  state ={
    temperature: undefined,
    city: undefined,
    error: undefined
 }
  getWeather = async(e)=>{
  e.preventDefault();
    var city = e.target.elements.city.value;
    var url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bfc9a88a5254d62da2d833338af66217&units=metric`);
    var data = await url.json();
    //console.log (data)
    if (city){
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        error: ""
           });
    } 
    else {
      this.setState({
        error: "Please enter the value..." 
          });
      }
   }
  render(){
    return(
         <div className="App">
         <header className="App-header">
         <img src={logo} className="App-logo" alt="logo"/></header>
         <Form getWeather={this.getWeather}/>
           <Weather 
             temperature={this.state.temperature} 
             city={this.state.city}
             error={this.state.error}/>
         </div>
       );
     }
};
export default App;







