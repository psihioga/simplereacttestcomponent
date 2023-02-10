import React from "react";

export interface ButtonProps {
  label: string;
  color?: string;
  element?: JSX.Element;
}

const ButtonExtended = (props: ButtonProps) => {
  const style = `flex justify-center gap-x-1 items-center text-sky-50 
  font-medium py-2 px-4 rounded-md 
  bg-gradient-to-b 
  from-csgo-400 to-csgo-500
  min-w-[150px]`;

  const Button = () => {
    return <button className={style}>
      {props.element? props.element : <span>нет элемента</span>}      
    </button>;
  };

  return <Button />;
};

export default ButtonExtended;
