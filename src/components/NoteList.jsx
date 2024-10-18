import {motion} from 'framer-motion'
import useNoteContext from '../hooks/useNoteContext';
import { useState } from 'react';
const NoteList = () => {
    const {state, dispatch, editNote, setEditNote} = useNoteContext()
    const [editTitle, setEditTitle] = useState('')
    const [editDescription, setEditDescription] = useState('')
    return(
        <div className='max-w-7xl mx-auto p-6'>
            {state.length > 0 ? (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                    {state.map((note) => (
                        <motion.div
                        className="p-6 my-2 bg-yellow-300 rounded-md shadow-lg"
                        key={note.id}
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: 1}}
                        exit={{opacity: 0, height: 0}}
                        transition={{ duration: 0.5 }}
                        >
                            {editNote === note.id ? (
                                <div>
                                    <input 
                                    value={editTitle}
                                    onChange={(e) => setEditTitle(e.target.value)}
                                    className='border-slate-200 mr-2 rounded-md px-3 py-2 placeholder-slate-400 contrast-more:placeholder-slate-500
                                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 w-full mb-4'
                                    placeholder='Edite o titulo'
                                    type="text" />

                                    <textarea 
                                    value={editDescription}
                                    onChange={(e) => setEditDescription(e.target.value)}
                                    className='border-slate-200 mr-2 rounded-md px-3 py-2 placeholder-slate-400 contrast-more:placeholder-slate-500
                                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 w-full'
                                    placeholder='Edite a descricao'
                                    type="text" />
                                </div>
                            ) : (
                                <>
                                    <p className="text-black font-bold capitalize border-b border-black">{note.title}</p>
                                    <p className='text-black'>{note.description}</p>
                                    <small className="text-black">{note.date}</small>
                                </>
                            )}
                            <button
                            className='m-2 bg-slate-700 py-1.5 px-2 rounded-md text-white hover:bg-slate-600'
                            onClick={() => dispatch({type: 'REMOVE', id: note.id})}>Remover</button>

                            {editNote === note.id ? (
                                <button 
                                className='m-2 bg-slate-700 py-1.5 px-2 rounded-md text-white hover:bg-slate-600'
                                onClick={() => {
                                    dispatch({type: 'EDIT', id: note.id, newTitle: editTitle, newDescription: editDescription});
                                    setEditNote(null) //para sair do modo edicao
                                    setEditDescription('') //para limpar o texto do input de edicao
                                    setEditTitle('')
                                }}>
                                    Salvar
                                </button>
                            ): (
                                <button 
                                className='m-2 bg-slate-700 py-1.5 px-2 rounded-md text-white hover:bg-slate-600'
                                onClick={() => {
                                    setEditNote(note.id);
                                    setEditTitle(note.title)
                                    setEditDescription(note.description);
                                }}>
                                    Editar
                                </button>
                            )}
                        </motion.div>
                    ))}
                </div>
            ) : (
                <p>Nenhuma nota adicionada</p>
            )}
        </div>
    )
}

export default NoteList;

//Estilizar os botoes dps