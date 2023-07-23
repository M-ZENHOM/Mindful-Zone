
import React from "react";
import SpeedDial from "@/components/SpeedDial";
import Todo from "@/components/Todo";
import Wrapper from "@/components/Wrapper";
import CountDown from "@/components/CountDown";

export default function Home() {

  return (
    <Wrapper >
      <SpeedDial />
      <div className="grid grid-cols-fluid gap-5 my-10">
        <Todo />
        <CountDown />
      </div>
    </Wrapper>
  )
}
