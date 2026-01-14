import { useState } from "react";

export const useCalculator = () => {
  const [value1, setValue1] = useState<string>("0");

  const showValue = (value: string) => {
    setValue1(value);
  };

  const saludar= (name:string)=>{
    return `hola ${name}`
  }

  return {
    //props
    value1,

    //funcs
    showValue,
    saludar
  };
};
