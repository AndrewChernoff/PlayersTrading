import { ChangeEvent, useState } from "react"
import Athlete from "../../store/Athlete"


type PropsType = {
    athlete: Athlete
 }

const TradeForm = ({athlete}: PropsType) => {

    const [teamName, setTeamName] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setTeamName(e.currentTarget.value)
    
    const onTrade = () => { 
        if (teamName.trim().length === 0) {
            return false
        }
        athlete.tradePlayer(teamName)
        setTeamName('')
    }

    return (
        <>
            <input value={teamName} onChange={onChangeHandler}/>
            <button onClick={onTrade}>Trade</button>
        </>
    )
}

export default TradeForm
