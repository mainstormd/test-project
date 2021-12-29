import {useCallback} from "react";
import {useNavigate } from "react-router-dom"
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    row :{
        "& > .MuiTableCell-root":{
          fontFamily: "Montserrat",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "12px",
          lineHeight: "120%",
          color: "#424242",
          paddingTop:"11px",
          paddingBottom:"11px",
          borderBottom: "none"
        }
    }
});

function SensorRow({id, deviceNumber,deviceName, condition, valueSensor,isHighlighted, rowClick,rows})
{
    const classes = useStyles();
    const navigate = useNavigate();
    const tableRowClick = useCallback( () => {
        rowClick(id);
        navigate(`/sensors/${id}`);
    }, [id,rows]);

    return (
        <TableRow className={classes.row} hover key={id} onClick={() => tableRowClick()} style={ isHighlighted ? { backgroundColor:"#F8F8F8" } : {} }>
            <TableCell align="left">{id}</TableCell>
            <TableCell align="left"> 
                <div style={{color:"#F8BC3A"}}>{deviceNumber}</div> {deviceName}</TableCell>
            <TableCell align="left">{condition === true ? "Вкл" : "Выкл"}</TableCell>
            <TableCell align="left">+{valueSensor}°C</TableCell>
        </TableRow>
    );
}

export default SensorRow;