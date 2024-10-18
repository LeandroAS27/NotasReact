import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

export default function useNoteContext() {
    const context = useContext(NotesContext)

    if(context === undefined){
        throw new Error("nao esta dentro do contexto")
    }
    return context
}