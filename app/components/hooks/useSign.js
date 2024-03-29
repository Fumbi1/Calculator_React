"use client";
import { Numbers, Signs } from "@/app/utils/signs";
import React, { useState, useEffect } from "react";
const useSign = () => {
  const [display, setDisplay] = useState("0");
  const [answer, setAnswer] = useState("= 0");
  const [disable, setDisable] = useState(false);


  useEffect(() => {
    controlOperand();
    console.log(disable);
    const handleKeyPress = (event) => {
      const { key } = event;
      if (!isNaN(key) || key === "." || Signs.includes(key)) {
        // Allow numeric keys, decimal point, operator keys, and Enter key
        cocatenateValue(key);
      } else if (key === "Backspace") {
        // Handle backspace key for deleting
        deleteValue();
      } else if (key === "Escape") {
        // Handle escape key for clearing
        clearValue();
      } else if (key === "Enter") {
        // Handle calculations
        operateValue();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [display]);

  const clearValue = () => {
    setDisplay("0");
    setAnswer("= 0");
  };

  const deleteValue = () => {
    let Show = [...display];
    Show.pop();
    console.log(Show);
    {
      Show.length === 0 ? setDisplay("0") : setDisplay(Show.join(""));
    }
  };

  const cocatenateValue = (value) => {
    //"value" passed as an argument refers to the value of the clicked NumberBtn involved
    // If display is "0", set it to just the value. Otherwise, concatenate the value to the display
    display === "0" ? setDisplay(value) : setDisplay(`${display}${value}`);
  };

  const operateValue = () => {
    // Check if the expression ends with an operator
    const lastChar = display.trim().slice(-1);
    if (Signs.includes(lastChar)) {
      // If the expression ends with an operator, it's not a valid expression
      setAnswer("Input a correct Expression");
    } else {
      // If the expression ends with a number, evaluate the expression.
      //Result is first turned into a function and returned  as  shown,
      // then it is called[shown by the "()" after ("return " + display)]
      let Result = Function("return " + display)();
      setAnswer("=  " + Result);
    }
  };

  const controlOperand = () => {
    const lastChar = display.trim().slice(-1);
    console.log(lastChar)
    if (Signs.includes(lastChar)) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  };

  return {
    clearValue,
    deleteValue,
    cocatenateValue,
    operateValue,
    controlOperand,
    disable,
    answer,
    display,
  };
};
export default useSign;
