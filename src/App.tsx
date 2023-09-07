import "./App.css";
import MoneyTalks from "./components/MoneyTalks";
import Roster from "./components/Roster";
import Athlete from "./store/Athlete";
import "./App.css";
import { TeamStoreProvider } from "./store/TeamStore";
import TeamInfo from "./components/TeamInfo";

const lebron = new Athlete("Lebron James", 37, 9);
const steph = new Athlete("Steph Curry", 35, 7);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TeamStoreProvider players={[lebron, steph]}>
          <TeamInfo />
          <Roster />
          <MoneyTalks />
        </TeamStoreProvider>
      </header>
    </div>
  );
}

export default App;
