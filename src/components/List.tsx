import React from "react"
import { Istate as Iprops } from "../App"

const List: React.FC<Iprops> = ({note}) => {

    const renderList = ():JSX.Element[] => {
        return note.map(note => {
            return (
                <li className="List">
                    <div className="List-headere">
                        <h2>{note.heading}</h2>
                    </div>
                    <p className="List-note">{note.description}</p>
                    <p>{note.speaker}</p>
                    <p>{note.date}</p>
                </li>
            )
        })
    }

    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List