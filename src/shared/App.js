import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PostList from '../pages/PostList';
import { Grid } from "../elements";

function App() {
  return (
    <>
    <Grid is_flex>
      <BrowserRouter>
        <Route exact path="/" component={PostList} />
      </BrowserRouter>
      </Grid>
    </>
  );
}

export default App;
