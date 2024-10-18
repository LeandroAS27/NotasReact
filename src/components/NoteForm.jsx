import { useState } from "react";
import useNoteContext from "../hooks/useNoteContext";

const NoteForm = () => {
    const {dispatch} = useNoteContext();
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    // const [newNote, setNewNote] = useState('')
    const [error, setError] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();

        const date = new Date().toLocaleDateString();
        
        if(newTitle.trim() === ''){
            setError('Preencha o título')
            return;
        }else if(newDescription.trim() === ''){
            setError('Preencha a descrição')
            return;
        }
        dispatch({type: "ADD", id: Date.now(), title: newTitle, description: newDescription, date: date});
        setNewDescription('')
        setNewTitle('')
        setError('')

    }


    return(
        <div>
            <div className="max-w-xl w-full mx-auto p-8 bg-slate-700 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* campo do titulo */}
                    <div>
                        <input 
                        type="text" 
                        onChange={(e) => setNewTitle(e.target.value)}
                        value={newTitle}
                        placeholder="Adicione o título..."
                        className='border-slate-200 mr-2 rounded-md px-3 py-2 placeholder-slate-400 contrast-more:placeholder-slate-500
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 mt-4 w-full'
                        />
                    </div>
                    {/* campo de descricao */}
                    <div>
                        <textarea 
                        placeholder="Adicione a descrição..."
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                        className="w-full rounded-md p-2 mt-1 border focus:ring-1 focus:ring-indigo-300 focus:outline-none"
                        ></textarea>
                    </div>
                    <div>
                        <button 
                        className="py-2 px-4 bg-indigo-500 rounded-lg text-white font-bold hover:bg-indigo-600 transition-colors"
                        type="submit">
                            Adicionar nota
                        </button>
                    </div>
                        {error && <p className='text-red-500'>{error}</p>}
                </form>
            </div>
        </div>
    )
}

export default NoteForm;