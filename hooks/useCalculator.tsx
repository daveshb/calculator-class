import { useState } from "react";


export const useCalculator = () => {
  const [value1, setValue1] = useState<string>("0");
  const [value2, setValue2] = useState<string>("0");
  const [operator, setOperator] = useState<string>("0");
  const [result, setResult] = useState<string>("0");

  // Construir números
  const buildNumber = (num: string) => {

 
    if (operator === "0") {
      
      if (value1.includes('.') && num === '.') return;
      
      if (value1 === "0") {
        setValue1(num);
      } else {
        setValue1(value1 + num);
      }
    } else {
      // Ya tenemos un operador, ahora escribimos el segundo número
      if (value2.includes('.') && num === '.') return;
      if (value2 === "0") {
        setValue2(num);
      } else {
        setValue2(value2 + num);
      }
    }
  };

  // Manejar operadores
  const handleOperator = (op: string) => {
    if (operator !== "0") {
      // Si ya hay un operador, calcular primero
      calculate();
    } else {
      setOperator(op);
    }
  };

  // Calcular el resultado
  const calculate = () => {
    if (operator === "0" || value2 === "0") return;

    let resultado = 0;
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);

    switch (operator) {
      case "+":
        resultado = num1 + num2;
        break;
      case "-":
        resultado = num1 - num2;
        break;
      case "*":
        resultado = num1 * num2;
        break;
      case "/":
        resultado = num1 / num2;
        break;
      default:
        return;
    }

    setValue1(resultado.toString());
    setValue2("0");
    setOperator("0");
    setResult(resultado.toString());
  };

  // Limpiar todo
  const resetValue = () => {
    setValue1("0");
    setValue2("0");
    setOperator("0");
    setResult("0");
  };

  // Construir el texto de la operación
  const getOperation = () => {
    if (operator === "0") {
      return value1;
    }
    return `${value1} ${operator} ${value2}`;
  };

  return {
    //props
    value1,
    operator,
    value2,
    result,

    //funcs
    buildNumber,
    handleOperator,
    calculate,
    resetValue,
    getOperation,
  };
};
