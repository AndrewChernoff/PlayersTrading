import { observer } from 'mobx-react-lite'
import TradeForm from './common/TradeForm'
import { useTeamStore } from '../store/TeamStore'


const Rooster = () => {

    const {players} = useTeamStore()

    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Trade</th>
                <th>Teams</th>
                <th>Is it their birthday?</th>
            </tr>
                {players.map(athlete => {
                    return <tr key={athlete.name}>
                        <td>{athlete.name}</td>
                        <td>{athlete.age}</td>
                        <td><TradeForm athlete={athlete}/></td>
                        <td>{athlete.teamsList}</td>
                        <td>
                            <button 
                                type='button'
                                style={{width: "100%"}}
                                onClick={() => athlete.wishHappyBirthday()}
                                >
                                    Wish happy birthday
                            </button>
                        </td>
                    </tr>
                })}
        </table>
    )
}

export default observer(Rooster)
