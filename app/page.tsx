"use client"
import React from "react";
import SpeedDial from "@/components/SpeedDial";
import Todo from "@/components/Todo";
import Wrapper from "@/components/Wrapper";
import CountDown from "@/components/CountDown";
import { useActiveStore, useNotesStore, useTimerStore, useTodoStore } from "@/store";
import useLocalStorage from "@/hooks/useLocalStorage";
import Notes from "@/components/Notes";

export default function Home() {
  const Active = useLocalStorage(useActiveStore, (state) => state)
  const Timer = useLocalStorage(useTimerStore, (state) => state)
  const todoThings = useLocalStorage(useTodoStore, (state) => state)
  const NotesThings = useLocalStorage(useNotesStore, (state) => state)

  return (
    <Wrapper>
      <SpeedDial Active={Active} />
      <div className="grid grid-cols-fluid gap-5 my-10 w-full h-full">
        {Active?.todo && <Todo todos={todoThings} Active={Active} />}
        {Active?.timer && <CountDown counter={Timer} Active={Active} />}
        {Active?.note && <Notes NotesThings={NotesThings} Active={Active} />}
      </div>
    </Wrapper>
  )
}
