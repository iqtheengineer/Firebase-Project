import React, { useState, useEffect} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch }from 'react-redux';
import { useSelector } from 'react-redux';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ ItemName: '', title: '', message: '', tags: '', selectedFile: '' });
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();
  
    useEffect(() => {
      if (post) setPostData(post);
    }, [post]);
  
    const clear = () => {
      setCurrentId(0);
      setPostData({ ItemName: '', title: '', message: '', tags: '', selectedFile: '' });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (currentId === 0) {
        dispatch(createPost(postData));
        clear();
      } else {
        dispatch(updatePost(currentId, postData));
        clear();
      }
    };

    return (
        <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
         <Typography variant="h6">{ currentId ? 'Editing': 'Creating'}Create a warranty</Typography>
         <TextField name="ItemName" variant="outlined" label="ItemName" fullWidth value={postData.ItemName} onChange={(e)=> setPostData({ ...postData, ItemName: e.target.value})} />
         <TextField name="Model" variant="outlined" label="Model" fullWidth value={postData.Model} onChange={(e)=> setPostData({ ...postData, title: e.target.value})} />
         <TextField name="Message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e)=> setPostData({ ...postData, message: e.target.value})} />
         <TextField name="Tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e)=> setPostData({ ...postData, tags: e.target.value})} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>

        </Paper>
    );
}

export default Form;