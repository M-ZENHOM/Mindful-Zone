"use client"
import React from "react";
import { useStoreComponents } from "@/hooks/use-store-components";
import SpeedDial from "@/components/SpeedDial";
import Todo from "@/components/Todo";
import Wrapper from "@/components/Wrapper";
import Note from "@/components/Note";

export default function Home() {
  const { statuses, handleTodoStatusChange, handleNoteStatusChange } = useStoreComponents()

  return (
    <Wrapper >
      <SpeedDial statuses={statuses} handleTodoStatusChange={handleTodoStatusChange} handleNoteStatusChange={handleNoteStatusChange} />
      <div className="grid grid-cols-fluid gap-5 my-10">
        <Todo statuses={statuses} handleTodoStatusChange={handleTodoStatusChange} />
        <Note statuses={statuses} handleNoteStatusChange={handleNoteStatusChange} />
      </div>
    </Wrapper>
  )
}
