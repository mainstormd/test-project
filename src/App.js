import './App.css';
import SensorsView from './components/SensorsView'
import SensorPage  from './components/SensorPage'
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";

let fontList = {
  width: "1920px",
  height: "1080px",
  background: "#F4F4F4"
}

function App() {
  return (
      <Router>
        <div style={fontList}>  
          <Routes>
            <Route exact path="/" element={<SensorsView/>}/>
            <Route exact path="/sensors/:sensorId" element={<SensorPage/>}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
