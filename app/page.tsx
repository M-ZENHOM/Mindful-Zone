"use client"
import React from "react";
import { useStoreComponents } from "@/hooks/use-LocalStorage";
import SpeedDial from "@/components/SpeedDial";
import Todo from "@/components/Todo";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  const { statuses, handleTodoStatusChange, handleNoteStatusChange } = useStoreComponents()

  return (
    <Wrapper >
      <SpeedDial handleTodoStatusChange={handleTodoStatusChange} handleNoteStatusChange={handleNoteStatusChange} />
      <div className="grid grid-cols-fluid gap-5 my-10">
        <Todo statuses={statuses} handleTodoStatusChange={handleTodoStatusChange} />
      </div>
    </Wrapper>
  )
}
