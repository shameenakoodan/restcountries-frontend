import './App.scss';
import Navigation from './components/Navigation/Navigation';
import ListContainer from './container/ListContainer/ListContainer';
import { useState,useEffect  } from 'react';
function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    console.log("Clicked");
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  
  return (
    <div className={`App ${theme}`}>
      <Navigation  toggleTheme={toggleTheme} theme={theme}/>
      <ListContainer  theme={theme}/>
    </div>
  );
}

export default App;
