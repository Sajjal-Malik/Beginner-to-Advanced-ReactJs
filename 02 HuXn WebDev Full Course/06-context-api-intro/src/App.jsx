import './App.css';
import ComponentA from './components/ComponentA';
import { DataContext, ThemeContext } from './contexts/AppContext';

function App() {
  const name = "Malik";
  const theme = "dark";

  return (
    <ThemeContext.Provider value={theme}>
      <DataContext.Provider value={name}>
        <ComponentA />
      </DataContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
