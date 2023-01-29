import React from "react";
import "./Button.css";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  const style = `bg-blue-500  text-black font-bold py-2 px-4`;  
  return <button className={style}>{props.label}</button>;
};

export default Button;