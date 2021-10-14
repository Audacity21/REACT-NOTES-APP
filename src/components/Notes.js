import {MdDeleteForever} from 'react-icons/md';

const Notes = ({id, text, date, handleDeleteNote}) => {
    return(
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever onClick={()=> handleDeleteNote(id)} className="note-delete" size="1.3em"/>
            </div>
        </div>
    )
}

export default Notes;