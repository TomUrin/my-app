import logo from './logo.svg';
import './App.css';
import Hello from './Components/009/Hello';
import Mustang from './Components/009/Mustang';
import Zuikis from './Components/Homework/Zuikis';
import Props from './Components/Homework/Props';
import ZebraiBebrai from './Components/Homework/ZebraiBebrai';
import DuPropsai from './Components/Homework/DuPropsai';
import MoreProps from './Components/Homework/MoreProps';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Zuikis></Zuikis>
        <Props tekstas = "bet koks tekstas"></Props>
        <ZebraiBebrai spalva = {1}></ZebraiBebrai>
        <DuPropsai pirmas = "tekstas numeris vienas" antras = "antras tekstas"></DuPropsai>
        <MoreProps first = "first text" second = "second text" color = "crimson"></MoreProps>
      </header>
    </div>
  );
}

export default App;
