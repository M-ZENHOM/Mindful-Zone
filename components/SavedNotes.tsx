import { Note, NotesType } from '@/types'
import React from 'react'
import { FC } from 'react'
import { Card } from './ui/card'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import ColorSelector from './ColorSelector'

interface SavedNotesProps {
    NotesThings: NotesType
    note: Note
}

const SavedNotes: FC<SavedNotesProps> = ({ note, NotesThings }) => {
    const [noteText, setNoteText] = React.useState("")

    const handleUpdate = (id: number) => {
        if (noteText !== "") {
            NotesThings?.updateNote(id, noteText)
        }
    }

    return (
        <Card className={`w-full max-w-sm h-fit min-h-[300px] p-10 space-y-5 rounded-xl relative`}
            style={{ backgroundColor: note.color }}>
            <Textarea className='w-full h-fit min-h-[200px]' onChange={(e) => setNoteText(e.target.value)} defaultValue={note.title} placeholder="Type your note." />
            <button className='absolute top-3 right-5 text-xl' onClick={() => NotesThings.deleteNote(note.id)} >x</button>
            <div className='flex space-x-5'>
                <Button onClick={() => handleUpdate(note.id)}>Update</Button>
                <ColorSelector NotesThings={NotesThings} id={note.id} />
            </div>
        </Card>
    )
}

export default SavedNotes