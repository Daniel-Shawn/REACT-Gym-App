import { useState, useEffect } from 'react'
import { SCHEMES, WORKOUTS } from '../utils/swolder'
import SectionWrapper from './SectionWrapper'
import Button from './Button'


function Header(props){
    const {index, title, description} = props
    return(
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <p className="text-3xl sm:text-4xl md:text-5xl font-semi-bold text-slate-400" >{index}</p>
                <h4 className='text-xl  sm:text-2xl md:text-3xl' >{title}</h4>
            </div>
            <p className='text-sm sm:text-base mx-auto'>{description}</p>
        </div>
    )
}

export default function Generator(props){
    const {setPoison, setMuscles, setGoals, poison, muscles, goals, updateWorkout} = props

    let [showModal, setShowModal] = useState(false)
    
    useEffect(() => {
        setMuscles([]);
    }, [poison]);

    // useEffect(() => {
    //     console.log(muscles);
    // }, [muscles]);

    function toggleModal(){
        setShowModal(!showModal)
    }

    function toggleMuscleGroup(musclegroup) {
        if (muscles.includes(musclegroup)) {
            //deselecting the blue active button/ muscle
            setMuscles(muscles.filter(item => item !== musclegroup));
            
        } else {//what happens after selecting the button/ muscle
            if (muscles.length < 3) { setMuscles([...muscles, musclegroup]);}
            else{ toggleModal() }
        }        
    }

    return(
        <>
        <SectionWrapper id={'generateSection'} header={"Generate your workout"} title={["It's", "Huge", "O' clock"]}>
            <Header index={'01'} title={'Pick Your Poison'} description={'Select the workout you wish to suffer.'} />
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                {Object.keys(WORKOUTS).map((type, typeIndex) => {
                    return (
                        <button 
                        onClick={() => {
                            setPoison(type)
                        }} 
                        className={'bg-slate-950 border border-blue-400 py-3 rounded-lg duration-200 ' + (type === poison ? ' selectedBtn' : 'border-blue-400')} key={typeIndex}>
                            <p className='capitalize'>{type.replaceAll('_', ' ')}</p>
                        </button>
                    )
                })}
            </div>

            {/* For the workouts with modal */}
            <Header index={'02'} title={'Lock on targets'} description={'Select body parts you want to work out on. Only 3 max'} />
            <div className="bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col">
                <button onClick={toggleModal} className='relative p-3 flex items-center justify-center duration-200'>
                    <p className="capitalize" >{muscles.length > 0 ? ('Your choices: ' + muscles.join(', ')) : 'Select from these muscle'}</p>
                    <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
                </button>
                {showModal && (
                    <div className='flex flex-col px-3 pb-3 duration-200 gap-2'>
                       {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((musclegroup, musclegroupIndex) => {
                        return (
                            <button key={musclegroupIndex}
                            onClick={() => {
                                toggleMuscleGroup(musclegroup)
                            }}
                            className={'bg-slate-950 border py-2 rounded-lg duration-200 ' + (muscles.includes(musclegroup) ? 'selected' : 'border-blue-400')}>
                            <p className='capitalize'>{musclegroup}</p>
                            </button>
                        )
                       })}
                    </div>
                )}
            </div>

            {/* 3rd header */}
            <Header index={'03'} title={'Become a juggernaut'} description={'Select how big. A hulk? A superman? A Goku.'} />
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                    return (
                        <button 
                        onClick={() => {
                            setGoals(scheme)
                        }}
                        className={'bg-slate-950 border border-blue-400 py-3 rounded-lg px-4 duration-200 ' + (scheme === goals ? ' selectedBtn' : 'border-blue-400')} key={schemeIndex}>
                            <p className='capitalize'>{scheme.replaceAll('_', ' ')}</p>
                        </button>
                    )
                })}
            </div>
        </SectionWrapper>

        <Button func={() => {
            window.locate.href = '#workoutSection'
        }} text={"Formulate"} updateWorkout={updateWorkout} />
        
        </>
    )
}

