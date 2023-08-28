import {useContext} from "react";
import MeetupList from "../Components/meetups/MeetupList";

import FavoritesContext from "../Store/favorites-context";

function FavoritesPage () {

    const favoritesCtx =useContext(FavoritesContext);
    
    let content;

    if (favoritesCtx.totalFavorites === 0) {
        content = <p>You ain't got nothing. Start adding some?</p>
    } else {
        content =  <MeetupList meetups={favoritesCtx.favorites}/>
    }
    return (
         <section>
             <h1>My favorites</h1>
          {content}  
         </section>
    );

}

export default FavoritesPage;