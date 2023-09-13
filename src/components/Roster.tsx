import { observer } from 'mobx-react-lite'
import TradeForm from './common/TradeForm'
import { useTeamStore } from '../store/TeamStore'


const Roster = () => {

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
                        <td>{athlete.teamsList.map((el, i) => ((i === 0 && athlete.teamsList.length === 1) || i === athlete.teamsList.length - 1) ? `${el} ` : `${el}, `)}</td>
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

export default observer(Roster)
