
export default function Button(props){
    const {text, updateWorkout} = props

    return(
        <button onClick={updateWorkout} className="mx-auto px-8 py-4 rounded-md border-[2px] border-blue-400 border-solid blue-Shadow my-4">
            <p>{text}</p>
        </button>
    )
}

