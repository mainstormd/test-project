import List from '@mui/material/List';
import { Button,  ListItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import {useNavigate } from "react-router-dom"

let styleLabel = {
    width: "258px",
    height: "24px",
    fontFamily: "Montserrat",
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "120%",
    color: "#424242"
}

let styleSearchIcon = {
    height:"17.49px",
    width:"17.49px",
    color: "#707070"
}
  
let styleAddIcon = {
    height:"24px",
    width:"24px"
}

let stylesHeader = {
    color:"#B7B7B7",
    font:"Montserrat",
    fontSize:"12px",
    borderBottom:"none"
}
  
let sensorsViewStyle = {
    position: "absolute",
    width:"673px",
    height: "977px",
    background: "#FFFFFF",
    boxShadow:"0px 3px 6px rgba(0, 0, 0, 0.25)",
    borderRadius: "4px",
    left:"30px",
    top:"30px"
}

let styleCell = {
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


function SensorsView( {rows, addSensor,rowClick} )
{
  let navigate = useNavigate();

  let tableRowClick = ( rowId ) => {
    rowClick(rowId);
    navigate(`/sensors/${rowId}`);
  };

    return(
    <div style={sensorsViewStyle}>
        <List style={{padding:0}}>
          <ListItem divider style={{justifyContent:"space-between",alignItems:"center"}}>
            <div style={styleLabel}>Датчики температуры</div>
            <IconButton type="submit" aria-label="search">
              <SearchIcon style={styleSearchIcon} />
            </IconButton>
          </ListItem>
          <ListItem divider style={{padding:0}}>
          <Table style={{tableLayout: "fixed"}} >
            <TableBody>
              <TableRow key="1"  >
                <TableCell style={stylesHeader} align="left">ID</TableCell>
                <TableCell style={stylesHeader} align="left">Устройство</TableCell>
                <TableCell style={stylesHeader} align="left">Состояние</TableCell>
                <TableCell style={stylesHeader} align="left">Значение</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          </ListItem >
          <ListItem divider>
            <Button style={{textTransform: 'none', color:"#F8BC3A",fontWeight: 500,fontSize: "14px",lineHeight: "120%"}} onClick={addSensor} startIcon={<AddCircleIcon style={styleAddIcon}/>}>Добавить датчик</Button>
          </ListItem>
        </List>
        <Table style={{tableLayout: "fixed"}}>
          <TableBody>
            {rows.map((row) => (
                  <TableRow hover key={row.id} onClick={() => tableRowClick(row.id)} style={row.isHighlighted ? {backgroundColor:"#F8F8F8"}: {} }>
                    <TableCell style={styleCell}  align="left">{row.id}</TableCell>
                    <TableCell style={styleCell}  align="left"> 
                        <div style={{color:"#F8BC3A"}}>{row.deviceNumber}</div> {row.deviceName}</TableCell>
                    <TableCell  style={styleCell}  align="left">{row.condition}</TableCell>
                    <TableCell style={styleCell}  align="left">{row.valueSensor}</TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </div>
    );
}

export default SensorsView;
