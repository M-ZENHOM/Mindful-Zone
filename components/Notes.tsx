import { ActiveType, NotesType } from '@/types'
import React, { FC } from 'react'
import { Textarea } from './ui/textarea'
import { Card } from './ui/card'
import { Button } from './ui/button'
import SavedNotes from './SavedNotes'

interface NotesProps {
    Active: ActiveType
    NotesThings: NotesType
}

const Notes: FC<NotesProps> = ({ Active, NotesThings }) => {

    const noteRef = React.useRef<HTMLTextAreaElement>(null)

    const handleAdd = () => {
        const noteText = noteRef?.current?.value ?? "";
        if (noteText !== "") {
            NotesThings?.addNote(noteText)
            if (noteRef.current) {
                noteRef.current.value = "";
            }
        }
    }

    const handleClose = () => {
        Active?.setNoteActive()
        NotesThings?.removeAllNotes()
    }

    return (
        <>
            <Card className="w-full max-w-sm h-fit min-h-[300px] p-10 space-y-5 rounded-xl relative">
                <Textarea className='w-full ' ref={noteRef} placeholder="Type your note." />
                <button className='absolute top-0 right-5 text-xl' onClick={handleClose} >x</button>
                <Button onClick={handleAdd}>Save</Button>
            </Card>
            {NotesThings.notes.map((note) => (
                <SavedNotes key={note.id} note={note} NotesThings={NotesThings} />
            ))}
        </>
    )
}

export default React.memo(Notes)