// import { useState, useReducer, useEffect } from 'react'
// import { NotesContext } from './context/NotesContext';
import NoteForm from './components/Noteform';
import NoteList from './components/NoteList';
import NotesProvider from './context/NotesProvider';
import './App.css'

// const initialState = [];

// function reducer(state, action){
//   switch (action.type) {
//     case 'ADD':
//       return [...state, {id: action.id, text: action.text, date: action.date}];
//     case 'REMOVE':
//       return state.filter(note => note.id !== action.id);
//     case 'EDIT':
//       return state.map(note => note.id === action.id ? {...note, text: action.newText} : note)
//     case 'SET':
//       return action.notes
//     default:
//       return state;
//   }
// }

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  // const [editNote, setEditNote] = useState(null)
  // const [editText, setEditText] = useState('')


  // //salvar a nota
  // useEffect(() => {
  //   if(state.length > 0){
  //     localStorage.setItem('Note', JSON.stringify(state))
  //   }
  // }, [state])

  // //pegar a nota
  // useEffect(() => {
  //   const savedNotes = localStorage.getItem('Note');
  //   if(savedNotes){
  //     dispatch({type: 'SET', notes: JSON.parse(savedNotes)});
  //   }
  // }, []);

  return (
    <div className='w-screen h-max flex flex-col justify-center bg-gray-100'>
      {/* <div className='w-full max-w-md p-8 bg-white rounded-lg shadow-lg'> */}
        <h1 className='font-bold text-3xl mb-4 text-center'>Aplicação de notas</h1>
        <NotesProvider>
          <NoteForm/>
          <NoteList/>
        </NotesProvider>
      {/* </div> */}
    </div>
  )
}

export default App


//Ver amanha como usar o UseContext para esse Projeto