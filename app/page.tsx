"use client"
import React from "react";
import { useStoreComponents } from "@/hooks/useLocalStorage";
import SpeedDial from "@/components/SpeedDial";
import Todo from "@/components/Todo";
import Wrapper from "@/components/Wrapper";
import CountDown from "@/components/CountDown";

export default function Home() {
  const { statuses, handleTodoStatusChange, handleNoteStatusChange, handleTimerStatusChange } = useStoreComponents()

  return (
    <Wrapper >
      <SpeedDial statuses={statuses} handleTodoStatusChange={handleTodoStatusChange} handleNoteStatusChange={handleNoteStatusChange} handleTimerStatusChange={handleTimerStatusChange} />
      <div className="grid grid-cols-fluid gap-5 my-10">
        <Todo statuses={statuses} handleTodoStatusChange={handleTodoStatusChange} />
        <CountDown statuses={statuses} handleTimerStatusChange={handleTimerStatusChange} />
      </div>
    </Wrapper>
  )
}
