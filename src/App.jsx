import logo from './logo.svg';
import './App.scss';
import Navigation from './components/Navigation/Navigation';
import SearchArea from './components/SearchArea/SearchArea';
import ListContainer from './container/ListContainer/ListContainer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <ListContainer />
    </div>
  );
}

export default App;
