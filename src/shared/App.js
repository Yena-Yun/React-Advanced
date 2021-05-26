import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PostList from '../pages/PostList';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { Grid } from "../elements";

function App() {
  return (
    <>
    <Grid is_flex>
      <BrowserRouter>
        <Route exact path="/" component={PostList} />
          <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </BrowserRouter>
      </Grid>
    </>
  );
}

export default App;
