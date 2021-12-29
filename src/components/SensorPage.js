import List from '@mui/material/List';
import { FormControlLabel, ListItem, ListItemButton, ListItemText, Switch} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useParams } from "react-router-dom";
import { useState, useMemo } from "react"
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    sensorView : {  
        position: "absolute",
        width: "317px",
        height: "977px",
        background: "#FFFFFF",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "4px",
        left:"719px",
        top:"30px"
    },
      
    styleText : {
        "&.MuiTypography-root":{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "12px",
            lineHeight: "120%"
        }
    },
    
    styleSensorText : {
        "&.MuiTypography-root":{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "20px",
            lineHeight: "120%",
            color: "#424242"
        }
    },
    styleTextBold : {
        "&.MuiTypography-root":{
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "12px",
        lineHeight: "120%",
        fontWeight: "600"
        }
    },
      
    styleItemListOfSensorValue : {
        "&.MuiListItemText-root":{
            display:"flex",
            justifyContent:"space-between",
            width: "100%"
        }
    }
});


  
const CustomizedSwitch = styled(Switch)`
    .Mui-checked + .MuiSwitch-track {
      background-color:#fce4b0 !important;
    }
`;

function SensorPage({rows, switchClick})
{
    let { sensorId } = useParams();
    const memoizedSensor = useMemo( ( ) => { return rows.find( (item ) => item.id === sensorId); },[sensorId] );
    let [isDataSensorExpand, setStatusDataSensor] = useState(true);
    let [isStateSensorExpand, setStatusStateSensor] = useState(true);     
    
    let DataSensorExpandOnClick = () =>{
        setStatusDataSensor(!isDataSensorExpand);
    }

    let StateSensorExpandOnClick = () =>{
        setStatusStateSensor(!isStateSensorExpand);
    }
    const classes = useStyles();

    return (
        <div className={classes.sensorView}>
            <List style={{padding:0}}>       
                <ListItem divider style={{padding:"0px",paddingBottom:"2px"}} onClick={DataSensorExpandOnClick}>
                    <ListItemButton >
                    <ListItemText primary={<Typography className={classes.styleSensorText} component="div">{sensorId}</Typography>} />
                    { isDataSensorExpand ? <ExpandLess style={{color:"#707070"}} /> : <ExpandMore style={{color:"#707070"}} />}
                    </ListItemButton>
                </ListItem>
                { !isDataSensorExpand ? "" :
                <ListItem divider style={{height:"51px"}} > 
                    <ListItemText primary={<Typography className={classes.styleText} component="div">Состояние</Typography>} />
                    <FormControlLabel control={<CustomizedSwitch style={{color:"#f8bc3a"}} onChange={() => {switchClick(sensorId)}} checked={memoizedSensor.condition} />}  label={<Typography className={classes.styleText} variant="body">{memoizedSensor.condition === true ? "Вкл" : "Выкл"}</Typography>} labelPlacement="start"/>
                </ListItem>
                }
                { !isDataSensorExpand ? "" :
                <ListItem divider style={{height:"51px"}}  >
                        <ListItemText  primary={<Typography className={classes.styleText} variant="body" style={ { color:"#F8BC3A" } }>{memoizedSensor.deviceNumber}</Typography>}
                                                        secondary={<Typography className={classes.styleText} variant="body"> {memoizedSensor.deviceName}</Typography>} />
                </ListItem>
                }       
                <ListItem divider style={{padding:0}} onClick={StateSensorExpandOnClick}>
                    <ListItemButton style={{paddingTop:3,paddingBottom:"3px"}} >
                    <ListItemText primary={<Typography className={classes.styleTextBold} component="div">Показатели датчика</Typography>} />
                        { isStateSensorExpand ? <ExpandLess style={{color:"#707070"}}/> :  <ExpandMore style={{color:"#707070"}}/>}
                    </ListItemButton>
                </ListItem>
                { !isStateSensorExpand ? "" :
                <ListItem style={{flexDirection:"column"}} divider>
                    <ListItemText className={classes.styleItemListOfSensorValue} primary={<Typography className={classes.styleTextBold} component="div">Текущее значение</Typography>}
                                                                    secondary={<Typography className={classes.styleTextBold} component="div">+{memoizedSensor.valueSensor}°C</Typography>} />
                    
                    <ListItemText className={classes.styleItemListOfSensorValue} primary={<Typography className={classes.styleText} component="div">Диапазон</Typography>}
                                                                    secondary={<Typography className={classes.styleText} component="div">от -10 до +30 °C</Typography>} />

                    <ListItemText className={classes.styleItemListOfSensorValue} primary={<Typography className={classes.styleText} component="div">Модель</Typography>}
                                                                    secondary={<Typography className={classes.styleText} component="div">ESpD 417</Typography>} />                                            
                </ListItem>
                }
            </List>        
        </div>
    );
}

export default SensorPage;