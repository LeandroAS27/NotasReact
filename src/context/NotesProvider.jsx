import { NotesContext } from "./NotesContext";
import { useEffect, useState, useReducer } from "react";

const initialState = [];

function reducer(state, action){
  switch (action.type) {
    case 'ADD':
      return [...state, {id: action.id, title: action.title, description: action.description, date: action.date}];
    case 'REMOVE':
      return state.filter(note => note.id !== action.id);
    case 'EDIT':
      return state.map(note => note.id === action.id ? {...note, title: action.newTitle, description: action.newDescription} : note)
    case 'SET':
      return action.notes
    default:
      return state;
  }
}

// eslint-disable-next-line react/prop-types
export default function NotesProvider({children}){
    const [state, dispatch] = useReducer(reducer, initialState);
    const [editNote, setEditNote] = useState(null)
    const [editText, setEditText] = useState('')

        //salvar a nota
    useEffect(() => {
        if(state.length > 0){
        localStorage.setItem('Note', JSON.stringify(state))
        }
    }, [state])

    //pegar a nota
    useEffect(() => {
        const savedNotes = localStorage.getItem('Note');
        if(savedNotes){
        dispatch({type: 'SET', notes: JSON.parse(savedNotes)});
        }
    }, []);
    return(
    <NotesContext.Provider value={{dispatch, state, editNote, setEditNote, editText, setEditText}}>
        {children}        
    </NotesContext.Provider>
    )
}