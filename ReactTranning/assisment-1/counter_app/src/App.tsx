
import './App.css';
import Counter from './Component/counterCom';
import AppTitle from './Component/title';

function App() {
  return (
    <div className="App">
       <AppTitle name = "Counter"/>
       <Counter/>
    </div>
  );
}

export default App;
