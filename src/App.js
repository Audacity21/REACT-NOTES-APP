import { useEffect, useState } from 'react';
import Lists from './components/Lists';
import {nanoid} from 'nanoid';
import Search from './components/Search'
import Header from './components/Header';

const App = () => {
  const [note,setNote] = useState([
    {
      id: nanoid(),
      text: "Welcome to the notes app! Start typing in the text area to write a new note. You can save once you finish. Click on the delete icon to delete notes. Search and Toggle mode features are available too.",
      date: "01/01/2001",
    },
]);

const [searchText, setSearchText] = useState('');
const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  const savedNotes = JSON.parse(localStorage.getItem('audacity21-notes-app-data'));
  if(savedNotes){
    setNote(savedNotes);
  }
},[])

useEffect (() => {
  localStorage.setItem(
    'audacity21-notes-app-data',
     JSON.stringify(note));
}, [note]);

const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text: text, 
    date: date.toLocaleDateString()
  }
  const newNotes = [...note, newNote];
  setNote(newNotes);
}
const deleteNote = (id) => {
  const newNotes = note.filter((notes)=>notes.id !== id);
  setNote(newNotes);
}
  return(
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <Lists 
          note={note.filter((notes)=>
          notes.text.toLowerCase().includes(searchText.toLowerCase())
        )} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}/>
      </div>
    </div> 
  )
}

export default App;