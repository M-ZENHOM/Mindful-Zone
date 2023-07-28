import React, { FC } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select'
import { NotesType } from '@/types'

interface ColorSelectorProps {
    NotesThings: NotesType
    id: number
}

const ColorSelector: FC<ColorSelectorProps> = ({ NotesThings, id }) => {
    return (
        <Select onValueChange={(e) => NotesThings?.updateColor(id, e)} >
            <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Color" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {/* Static colors for now */}
                    <SelectItem value="">Default</SelectItem>
                    <SelectItem value="#6F5E53">Brown</SelectItem>
                    <SelectItem value="#3D348B">Tekhelet</SelectItem>
                    <SelectItem value="#FFC857">Sunglow</SelectItem>
                    <SelectItem value="#FE4A49">Tomato</SelectItem>
                    <SelectItem value="#F3A712">Orange</SelectItem>
                    <SelectItem value="#4E0250">Violet</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default ColorSelector