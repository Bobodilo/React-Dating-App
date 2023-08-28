import { Route , Switch } from "react-router-dom";
import Layout from "./Components/layout/Layout";

import AllMeetupsPage from "./Pages/AllMeetups";
import FavoritesPage from "./Pages/Favorites";
import NewMeetupPage from "./Pages/NewMeetup";

function App() {
  
  return (
  <Layout>
       <Switch>

        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>

        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>

        <Route path="/favorites" >
          <FavoritesPage />
        </Route>

        </Switch>  

  </Layout>
  );

};

export default App;
