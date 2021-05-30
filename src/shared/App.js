import { BrowserRouter, Route } from 'react-router-dom';
import PostList from '../pages/PostList';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

// Header는 모든 페이지에 있어야 하므로 App.js에 한번만 선언
import Header from '../components/Header';
import { Grid } from "../elements";


function App() {
  return (
    <>
      <Grid >
        <Header></Header>
        <BrowserRouter>
          <Route exact path="/" component={PostList} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </BrowserRouter>
      </Grid>
    </>
  );
}

export default App;
