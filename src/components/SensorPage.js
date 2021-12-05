import List from '@mui/material/List';
import { FormControlLabel, ListItem, ListItemButton, ListItemText, Switch} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useParams } from "react-router-dom";


let sensorView = {  
    position: "absolute",
    width: "317px",
    height: "977px",
    background: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "4px",
    left:"719px",
    top:"30px"
}
  
  
let styleText = {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "120%"
}
  
let styleTextBold = {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "120%",
    fontWeight: "600"
}
  
let styleItemListOfSensorValue = {
    display:"flex",
    justifyContent:"space-between",
    width: "100%"
}
  
const CustomizedSwitch = styled(Switch)`
    .Mui-checked + .MuiSwitch-track {
      background-color:#fce4b0 !important;
    }
`;

function SensorPage({rows})
{
    let { sensorId } = useParams();
    let sensor = rows.find( (item ) => item.id === sensorId);
    
    return (
        <div style={sensorView}>
            <List style={{padding:0}}>       
                <ListItem divider style={{padding:"0px",paddingBottom:"2px"}}>
                    <ListItemButton >
                    <ListItemText primary={sensorId} />
                    { /*open ? <ExpandLess /> : */ <ExpandMore style={{color:"#707070"}} />}
                    </ListItemButton>
                </ListItem>
                <ListItem divider style={{height:"51px"}}> 
                    <ListItemText primary={<Typography style={styleText} component="div">Состояние</Typography>} />
                <FormControlLabel control={<CustomizedSwitch style={{color:"#f8bc3a"}} checked={sensor.condition==="Вкл" ? true : false} />}  label={<Typography style={styleText} variant="body">{sensor.condition}</Typography>} labelPlacement="start"/>
                </ListItem>
                <ListItem divider style={{height:"51px"}}>
                        <ListItemText style={styleText} primary={<Typography variant="body" style={ { color:"#F8BC3A" } }>{sensor.deviceNumber}</Typography>}
                                                        secondary={<Typography variant="body"> {sensor.deviceName}</Typography>} />
                </ListItem>
                <ListItem divider style={{padding:0}}>
                    <ListItemButton style={{paddingTop:3,paddingBottom:"3px"}} >
                    <ListItemText primary={<Typography style={styleTextBold} component="div">Показатели датчика</Typography>} />
                        { /*open ? <ExpandLess /> : */ <ExpandMore style={{color:"#707070"}}/>}
                    </ListItemButton>
                </ListItem>
                <ListItem style={{flexDirection:"column"}} divider>
                    <ListItemText style={styleItemListOfSensorValue} primary={<Typography style={styleTextBold} component="div">Текущее значение</Typography>}
                                                                    secondary={<Typography style={styleTextBold} component="div">{sensor.valueSensor}</Typography>} />
                    
                    <ListItemText style={styleItemListOfSensorValue} primary={<Typography style={styleText} component="div">Диапазон</Typography>}
                                                                    secondary={<Typography style={styleText} component="div">от -10 до +30 °C</Typography>} />

                    <ListItemText style={styleItemListOfSensorValue} primary={<Typography style={styleText} component="div">Модель</Typography>}
                                                                    secondary={<Typography style={styleText} component="div">ESpD 417</Typography>} />                                            
                </ListItem>
            </List>        
        </div>
    );
}

export default SensorPage;