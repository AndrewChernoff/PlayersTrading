import { ChangeEvent, useState } from "react"
import { useTeamStore } from "../store/TeamStore"
import { observer } from "mobx-react-lite"

const TeamInfo = () => {
    
    const {teamName, setState} = useTeamStore()
    const [teamValue, setTeamValue] = useState('')

   
    const onInputHandler = (e: ChangeEvent<HTMLInputElement>) => setTeamValue(e.currentTarget.value)
    const onBtnHandler = () => setState(teamValue)

    return (
        <div style={{marginBottom: '10px'}}>
            <h1>Team: {teamName}</h1>
            <input value={teamValue} onChange={onInputHandler}/>
            <button onClick={onBtnHandler}>Change team name</button>
        </div>
    )
}

export default observer(TeamInfo)
