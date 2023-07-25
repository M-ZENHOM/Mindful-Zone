
"use client"
import React from "react";
import SpeedDial from "@/components/SpeedDial";
import Todo from "@/components/Todo";
import Wrapper from "@/components/Wrapper";
import CountDown from "@/components/CountDown";
import { useActiveStore } from "@/store";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function Home() {
  const { todo, note, timer, setTodoActive, setNoteActive, setTimerActive } = useLocalStorage(useActiveStore, (state) => state)

  const memoizedSpeadDial = React.useMemo(() =>
    <SpeedDial todo={todo} note={note} timer={timer} setTodoActive={setTodoActive} setNoteActive={setNoteActive} setTimerActive={setTimerActive} />, [todo, note, timer, setTodoActive, setNoteActive, setTimerActive]);
  const memoizedTodo = React.useMemo(() =>
    <Todo setTodoActive={setTodoActive} />, [setTodoActive]);
  const memoizedCountDown = React.useMemo(() =>
    <CountDown setTimerActive={setTimerActive} />, [setTimerActive]);

  return (
    <Wrapper >
      {memoizedSpeadDial}
      <div className="grid grid-cols-fluid gap-5 my-10 w-full h-full">
        {todo && memoizedTodo}
        {timer && memoizedCountDown}
      </div>
    </Wrapper>
  )
}
