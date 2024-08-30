import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import {generateWorkout} from './utils/functions'

function App() {
    const [workout, setWorkout] = useState(null)
    let [poison, setPoison] = useState('individual')
    let [muscles, setMuscles] = useState([])
    let [goals, setGoals] = useState('strength_power')

    function updateWorkout(){
        if (muscles.length > 0){
            let newWorkout = generateWorkout({poison, muscles, goals})
            //console.log(newWorkout)
            setWorkout(newWorkout)
        }
    }

    return(
        <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm m:text-base">
            <Hero />
            <Generator updateWorkout={updateWorkout} poison={poison} setPoison={setPoison} setMuscles={setMuscles} setGoals={setGoals} muscles={muscles} goals={goals} />
            {workout && (<Workout workout={workout} />)}
            {/* {workout && (<Workout workout={['workout1', 'workout2', 'workout3', 'workout4']} />)} */}

        </main>
    )
}

export default App
