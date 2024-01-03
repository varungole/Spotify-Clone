import './App.css';
import CurrentSong from './components/CurrentSong';
import MadeForMe from './components/MadeForMe';
import Navbar from './components/Navbar';
import Playlists from './components/Playlists';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Playlists />
      <MadeForMe />
      <CurrentSong />
    </div>
  );
}

export default App;
