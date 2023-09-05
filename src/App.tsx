import './App.css'
import  MoneyTalks  from './components/MoneyTalks'
import Rooster from './components/Rooster'
import Athlete from './store/Athlete'
import { TeamStoreProvider } from './store/TeamStore'

const lebron = new Athlete('Lebron James', 37, 9)
const steph = new Athlete('Steph Curry', 35, 7)


function App() {

  return (
    <>
    <TeamStoreProvider players={[lebron, steph]}  >
      <Rooster />
      <MoneyTalks />
      </TeamStoreProvider>
    </>
  )
}

export default App
