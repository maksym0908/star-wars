import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Navbar } from './components/navigation/Navbar';
import { SavedItems } from './components/saved_items/savedItems';
import { CharactersContainer } from './containers/charactersContainer';
import { OpenedCharacterContainer } from './containers/openedCharacterContainer';


export const App = ({ characters, liked, unliked, handleLikeState, filterCharacters, character, userInfo, saved_characters, handleSignOut, user_info_from_storage, characters_from_storage  }) => {

  return (
    <BrowserRouter>
    <Navbar filterCharacters={filterCharacters} userInfo={userInfo} lengthOfCharacter={saved_characters.length} handleSignOut={handleSignOut}  />
      <Switch>
        <Route path="/" exact>
          <CharactersContainer
          user_info_from_storage={user_info_from_storage}
          userInfo={userInfo}
          characters={characters}
          liked={liked}
          unliked={unliked}
          handleLikeState={handleLikeState}
          characters_from_storage={characters_from_storage}
           />  
        </Route>
        <Route path="/character/:name" >
          <OpenedCharacterContainer user_info_from_storage={user_info_from_storage} characters={characters} character={character} handleLikeState={handleLikeState} />
        </Route>
        <Route path="/saved-items" >
          <SavedItems saved_characters={saved_characters} liked={liked} setLike={handleLikeState} />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
