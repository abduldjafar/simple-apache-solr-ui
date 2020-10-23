import { makeStyles } from "@material-ui/core/styles";

const Style = makeStyles((theme) => ({
    heading:{
      alignItems: "center",
      fontSize: 33,
      fontWeight: 300,
      letterSpacing: "0.0075em",
      verticalAlign: "middle",
      alignItems: "center",
      textAlign: "center",
      color:'#2196F3'
    },
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 700,
      margin: `${theme.spacing()}px auto`
    },
    input: {
      flex: 2,
      alignItems: "center",
      paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
      borderTopLeftRadius: '4px',
      borderTopRightRadius: '4px'
    },
    iconButton: {
      //padding: 5,
      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      border: 1,
      
      boxShadow: '1 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height:40,
      padding: '0px 10px'
    },
    divider: {
      margin: `${theme.spacing()}px auto`
    },
    paper: {
      maxWidth: 700,
      margin: `${theme.spacing()}px auto`,
      padding: theme.spacing(2),
    },
    pagination: {
      maxWidth: 700,
      margin: `${theme.spacing()}px auto`,
      padding: theme.spacing(2),
      alignItems: "center",
      verticalAlign: "middle",
      alignItems: "center",
      textAlign: "center"
    },
    section1: {
      margin: theme.spacing(1, 2),
    },
    section2: {
      margin: theme.spacing(2),
      
    },
    section3: {
      margin: theme.spacing(2),
      //background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      border: 1,
      
      boxShadow: '1 3px 5px 2px rgba(255, 105, 135, .3)'
      
    },
    buttons: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    customWidth: {
        maxWidth: 1000,
      }
  }));

  export default Style ;