import React, { useState } from "react"
import { Istate as Props } from "../App"

interface Iprops {
    note: Props["note"]
    setNote: React.Dispatch<React.SetStateAction<Props["note"]>>
}

const AddToList: React.FC<Iprops> = ({note, setNote}) => {

    
    const [input, setInput] = useState({
        title: "",
        speaker: "",
        date: "",
        description: ""
    })
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        if (
            !input.title || !input.speaker || !input.description
        ) {
            return
        }

       setNote([
            ...note,
            {
                heading: input.title,
                description: input.description,
                date: input.date,
                speaker: input.speaker
            }
        ])
    }

    return (
        <div className="AddToList">
            <input
                type="text"
                placeholder="Title"
                className="AddToList-input"
                value={input.title}
                onChange={handleChange}
                name="title"
            />
            <input
                type="text"
                placeholder="speaker"
                className="AddToList-input"
                value={input.speaker}
                onChange={handleChange}
                name="speaker"
            />
            <input
                type="text"
                placeholder="Date"
                className="AddToList-input"
                value={input.date}
                onChange={handleChange}
                name="date"
            />
            <textarea
                placeholder="description"
                className="AddToList-input"
                value={input.description}
                onChange={handleChange}
                name="description"
            />
            <button 
                className="AddToList-btn"
                onClick={handleClick}
            >
                Add To List
            </button>
        </div>
    )
}

export default AddToList