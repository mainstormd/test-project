import List from '@mui/material/List';
import { Button,  ListItem, Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { makeStyles } from '@mui/styles';
import SensorRow from './SensorRow'

const useStyles = makeStyles({
  styleLabel : {
    width: "258px",
    height: "24px",
    fontFamily: "Montserrat",
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "120%",
    color: "#424242"
  },
  styleSearchIcon : {
    height:"17.49px",
    width:"17.49px",
    color: "#707070"
  },
  styleAddIcon : {
    height:"24px",
    width:"24px"
  },

  rowHeader : {
    "& > .MuiTableCell-root":{
      color:"#B7B7B7",
      font:"Montserrat",
      fontSize:"12px",
      borderBottom:"none"
    }
  },
  sensorsViewStyle : {
    position: "absolute",
    width:"673px",
    height: "977px",
    background: "#FFFFFF",
    boxShadow:"0px 3px 6px rgba(0, 0, 0, 0.25)",
    borderRadius: "4px",
    left:"30px",
    top:"30px",
    display:"flex", 
    flexDirection: "column"
  },
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


function SensorsView({ rows, addSensor,rowClick })
{
  const classes = useStyles();

  return(
    <div className={classes.sensorsViewStyle}>
        <List style={{padding:0}}>
          <ListItem divider style={{justifyContent:"space-between",alignItems:"center",paddingBottom:"4px",paddingTop:"4px"}}>
            <div className={classes.styleLabel}>Датчики температуры</div>
            <IconButton type="submit" aria-label="search">
              <SearchIcon className={classes.styleSearchIcon} />
            </IconButton>
          </ListItem>
          <ListItem divider style={{padding:0}}>
          <Table style={{tableLayout: "fixed"}} >
            <TableBody>
              <TableRow className={classes.rowHeader} key="1"  >
                <TableCell align="left">ID</TableCell>
                <TableCell align="left">Устройство</TableCell>
                <TableCell align="left">Состояние</TableCell>
                <TableCell align="left">Значение</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          </ListItem >
          <ListItem divider>
            <Button style={{textTransform: 'none', color:"#F8BC3A",fontWeight: 500,fontSize: "14px",lineHeight: "120%"}} onClick={addSensor} startIcon={<AddCircleIcon className={classes.styleAddIcon}/>}>Добавить датчик</Button>
          </ListItem>
        </List>
        <Box style={{width:"100%", height:"100%", overflow:"auto", alignSelf:"centered" }}>
          <Table style={{tableLayout: "fixed"}}>
            <TableBody>
              {
                rows.map((row) => {
                    const props = {...row,rowClick,rows}; //memory lk
                    return <SensorRow {...props}/>
                })                 
              }
            </TableBody>
          </Table>
        </Box>
      </div>
    );
}

export default SensorsView;
