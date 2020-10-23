import React from 'react';
import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Divider from '@material-ui/core/Divider';
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Pagination from "@material-ui/lab/Pagination";
import Solr from './Solr'
import Style from './Style'


const client = new ApolloClient({
  uri: "http://localhost:4000/"
});


export default function App() {
  const [value, setValue] = React.useState()
  const [start, setStart] = React.useState(0);
  const [row, setRow] = React.useState(5);
  const [page, setPage] = React.useState(1);
  const [checked, setChecked] = React.useState(false);

  const onSubmit =  e => {
    e.PreventDefault();
  };

  
  const classes = Style();

  return (
      
      <div>
        <div className={classes.heading}>
        <Typography variant="h5"><b>IPSE</b></Typography>
        </div>
        <ApolloProvider client={client}>
        
        <Paper component="form" className={classes.root}>
          <InputBase
            classes={{root:classes.input}}
            placeholder="Search"
            inputProps={{ "aria-label": "search google maps" }}
            onChange={event=>{ //adding the onChange event
              setValue(event.target.value)
            }}
            
          />
          <IconButton type="submit"  color="primary" className={classes.iconButton} aria-label="search" onClick= {onSubmit} > 
            <SearchIcon/>
          </IconButton>
      </Paper>
      <Divider className={classes.section3} />   
      <Solr query={value} row={row.toString()} start={start.toString()} client={client}/>
      <Pagination
              className={classes.paper}
              checked={checked}
              count={10}
              page={Number(page)}
              siblingCount={1}
              boundaryCount={1}
              variant="outlined"
              shape="rounded"
              onChange={(event, value) =>{ //adding the onChange event
                setChecked((prev) => !prev);
                setPage(value)

                if (value == 1) {
                  setStart(0)
                } else {
                  setStart((value*5)-5)
                }
                setRow(5)
                
              }}
            />
      </ApolloProvider>
    </div>
)};

