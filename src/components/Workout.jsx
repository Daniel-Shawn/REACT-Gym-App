import ExerciseCard from "./ExerciseCard"
import SectionWrapper from "./SectionWrapper"

export default function Workout(props){
    const {workout} = props
    return(
        <SectionWrapper id={'workoutSection'} header={"Welcome to"} title={["The DANGER zone"]}>
            <div className="flex flex-col gap-4 bg-slate-950 sm:flex-wrap">
                {workout.map((exercise, i) => {
                    return (
                        <ExerciseCard 
                        key={i} 
                        exercise={exercise} index={i} />
                    )
                })}
            </div>
        </SectionWrapper>
    )
}