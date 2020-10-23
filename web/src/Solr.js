import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import Divider from '@material-ui/core/Divider';
import Paper from "@material-ui/core/Paper";
import Style from './Style'
import getSolrData from './queries'
import Tooltip from '@material-ui/core/Tooltip';
import {useQuery} from  "@apollo/client";

export default function Solr(props){

        const classes = Style();
        
        const { loading, error, data } = useQuery(getSolrData, {
          variables:{query: props.query,row: props.row, start: props.start},
          client:props.client
        });

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return (
          data.responseHeader.response.docs.map(({ id, data, resource }) => (
            <div key={id}>
                <Paper className={classes.paper}>
                <div className={classes.section1}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item xs={12}>
                    <Typography noWrap color="textSecondary" variant="body2"> 
                    <a href={resource} target="_blank"> <InsertDriveFileIcon /></a>
                    </Typography>
                  </Grid>
                </Grid>
                </div>
                <Divider variant="middle" className={classes.Divider} />
                <div className={classes.section2}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item xs={12}>
                  <Tooltip title={data} classes={{ tooltip: classes.customWidth }} placement="left">
                    <Typography noWrap color="textSecondary">{data}</Typography>
                  </Tooltip>
                  </Grid>
                </Grid>
                </div>
              </Paper>
            </div>
          ))
      )
  }

