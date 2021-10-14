import Notes from './Notes'
import AddNote from './AddNote';

const List = ({note, handleAddNote, handleDeleteNote}) => {
    return (
        <div className="list">
            {note.map((notes)=>(
                <Notes id={notes.id} text={notes.text} date={notes.date} handleDeleteNote={handleDeleteNote}/>
            ))}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    )
}

export default List;