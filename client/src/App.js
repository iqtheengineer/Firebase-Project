import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Posts from './components/Posts/Posts';
import { getPosts } from './actions/posts';
import Form from './components/Form/Form';
import warranty from './images/warranty.png';
import useStyles from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPosts());
    }, [dispatch]);
    return (
       <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit"> 
                <Typography className={classes.heading} variant="h2" align="center">Warrantys Tracker</Typography>
                <img className={classes.image} img="true"src={warranty} alt="icon" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                      <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId}/>
                      </Grid>    
                     <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId}/>
                      </Grid> 
                    </Grid>
                </Container>
            </Grow>
       </Container>
    );
}

    export default App;