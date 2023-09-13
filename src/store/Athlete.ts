import { action, makeObservable, observable } from "mobx";

class Athlete {
    name: string
    age: number
    teamsList: string[]
    salary: number;
    
    constructor(name: string, age: number, salary: number) {
        this.name= name;
        this.age = age;
        this.teamsList = [];
        this.salary = salary

        makeObservable(this, {
            name: observable,
            age: observable,
            teamsList: observable,
            wishHappyBirthday: action,
            tradePlayer: action,
            salary: observable
        })
    }

    wishHappyBirthday = () => {
        this.age++
    }

    tradePlayer = (team: string) => {
        //this.teamsList.push(team)
        this.teamsList = [...this.teamsList, team]
    }
}

export default Athlete