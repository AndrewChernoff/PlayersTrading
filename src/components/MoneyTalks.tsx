import { action, computed, observable } from "mobx";
import { observer } from "mobx-react-lite";
import { ChangeEvent } from "react";
import { useTeamStore } from "../store/TeamStore";
import Athlete from "../store/Athlete";


type FormStateType = {
    years: number,
    salary: number,
    name: string,
    age: number
}

const initialState: FormStateType = {
    years: 0,
    salary: 0,
    name: '',
    age: 0
  };
  

let formState: FormStateType = observable({
    years: 0,
    salary: 0,
    name: '',
    age: 0
})

const MoneyTalks  = () => {

    const { addPlayer} = useTeamStore();


    const total = computed((): number => formState.salary * formState.years)

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 style={{ marginBottom: 0 }}>Money Talks</h1>
      <h2>Total: { total.get() }</h2>

      <input
        type="text"
        placeholder="Player name..."
        style={{ height: "40px" }}
        value={formState.name}
        onChange={action((e) => {
          formState.name = e.target.value;
        })}
      />
      <input
        type="number"
        placeholder="Player age..."
        style={{ height: "40px" }}
        min={16}
        onChange={action((e) => {
          formState.age = +e.target.value
        })}
      />

      <input
        type="number"
        placeholder="Years..."
        style={{ height: "40px" }}
        min={16}
        onChange={action((e: ChangeEvent<HTMLInputElement>) => formState.years = +e.currentTarget.value) }
      />
      
      <input
        type="number"
        placeholder="Yearly salary..."
        style={{ height: "40px" }}
        min={1}
        onChange={action((e: ChangeEvent<HTMLInputElement>) => formState.salary = +e.currentTarget.value )}
      />
      <button
        type="button"
        style={{marginTop: '10px'}}
        onClick={action(() => {
            addPlayer(new Athlete(formState.name, formState.age, formState.salary)) 
            formState = initialState;
        })}
      >
        Add Player
      </button>
    </div>
  );
}


export default observer(MoneyTalks)