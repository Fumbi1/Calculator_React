"use client";
import "./page.css";
import NumberBtn from "./components/numbers-btn/page";
import FunctionBtn from "./components/functions-btn/page";
import React, { useEffect } from "react";
import { Numbers, Signs } from "./utils/signs";
import useSign from "./components/hooks/useSign";

export default function Home(props) {
  const {
    clearValue,
    deleteValue,
    cocatenateValue,
    operateValue,
    disable,
    answer,
    display,
  } = useSign();



  return (
    <div className="main">
      <div className="wrapper">
        <div className="input">{`${display}`}</div>

        <div className="answer">{answer}</div>

        <div className="inline">
          <div className="clear" onClick={clearValue}>
            <p>AC</p>
          </div>
          <div className="clear" onClick={deleteValue}>
            <p>DEL</p>
          </div>
        </div>

        <div className="grid">
          <div className="flex">
            {Numbers.map((number, index) => {
              return (
                <div key={index}>
                  <NumberBtn
                    click={() => cocatenateValue(number)}
                    digit={number}
                    style="test"
                  />
                </div>
              );
            })}
          </div>

          <div className="flex2">
            {Signs.map((sym, index) => {
              return (
                <div key={index}>
                  <FunctionBtn
                    click={() => cocatenateValue(sym)}
                    disabled = {disable}
                    operand={sym}
                    style="test2"
                  />
                </div>
              );
            })}
            <div className="operate" onClick={operateValue}>
              <p>=</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
