import './App.css';
import SensorsView from './components/SensorsView'
import SensorPage  from './components/SensorPage'
import {  BrowserRouter as Router,  Routes,  Route, useNavigate } from "react-router-dom";
import { useState } from "react"

let fontList = {
  width: "1920px",
  height: "1080px",
  background: "#F4F4F4"
}

function createData(id, deviceNumber, deviceName, condition , valueSensor, isHighlighted) {
  return { id, deviceNumber, deviceName, condition , valueSensor, isHighlighted};
}

const intialzedRows = [
  createData('123456', "12345678", "SW1", "Вкл", "+70°C", false),
  createData('987348', "12345678", "SW1", "Вкл", "+40°C", false),
  createData('534256', "12345678", "SW1", "Выкл", "+50°C", false),
  createData('782364', "12345678", "SW1", "Вкл", "+30°C", false),
  createData('324235', "12345678", "SW1", "Вкл", "+10°C", false),
];

function getRandomNumber(){  
  return Math.floor(Math.floor(Math.random() * 1000000));
}

function App() {
  
 // let navigate = useNavigate();

  const [ rows , setRows ] = useState(intialzedRows);


  let addRowOnClick = ( event )=>{
    let result = [...rows];
    result.push(createData(getRandomNumber()+"", getRandomNumber()+"", "SW1", "Вкл", "+70°C",false));    
    setRows(result);
  };

  let rowClick = (rowId,event) => {
    
    let result = rows.map( item => {  
        if(item.id === rowId ) 
          item.isHighlighted = true;
        else
          item.isHighlighted = false;
        
        return  item; 
    });

    setRows(result);
  };

  let switchClick = (sensorId) => {
   
    let result = rows.map( item => {  
      if(item.id === sensorId ) 
      {
        if(item.condition === "Вкл")
          item.condition = "Выкл";
        else
          item.condition = "Вкл";
      }
        return  item; 
    });
    setRows(result);
  }

  return (
      <Router>
        <div style={fontList}>  
          <Routes>
            <Route exact path="/" element={
                <SensorsView rows={rows} addSensor={addRowOnClick} rowClick={rowClick}/>
            }/>
            <Route exact path="/sensors/:sensorId" element={
              <div>
                <SensorsView rows={rows} addSensor={addRowOnClick} rowClick={rowClick}/>
                <SensorPage rows={rows} switchClick={switchClick}/>
              </div>
            }/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
