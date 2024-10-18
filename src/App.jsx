import NoteForm from './components/Noteform';
import NoteList from './components/NoteList';
import NotesProvider from './context/NotesProvider';
import './App.css'

function App() {

  return (
    <div className='w-screen h-max flex flex-col justify-center bg-gray-100'>
        <h1 className='font-bold text-3xl mb-4 text-center'>Aplicação de notas</h1>
        <NotesProvider>
          <NoteForm/>
          <NoteList/>
        </NotesProvider>
    </div>
  )
}

export default App
