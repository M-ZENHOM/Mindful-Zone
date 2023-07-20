import { FC } from 'react'
import { Textarea } from './ui/textarea'
import { statusType } from '@/types'
import React from 'react'
import useStoreFromLocalStorage from '@/hooks/use-store'
import { useNotesStore } from '@/store'

interface NoteProps {
    statuses: statusType
    handleNoteStatusChange: (value: boolean) => void
}

const Note: FC<NoteProps> = ({ statuses, handleNoteStatusChange }) => {
    const { addNote, deleteNote } = useNotesStore((state => state))
    const { data } = useStoreFromLocalStorage(useNotesStore, (state) => state.notes)
    const handleClick = () => {
        handleNoteStatusChange(false)
        deleteNote()
    }

    return (
        <>
            {statuses.note && (
                <div className='relative'>
                    <button className='absolute top-3 right-5 text-xl' onClick={handleClick} >x</button>
                    <Textarea onChange={(e) => addNote(e.target.value)} value={data} className='w-full max-w-sm p-10 resize-none h-full' placeholder="Type your message here." />
                </div>
            )}
        </>
    )
}

export default Note