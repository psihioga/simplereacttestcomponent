import React from "react";
import { Heart } from "../../icons/index"


export interface ButtonProps {
  label: string;
  icon?: JSX.Element;
  color?: string;
}

const Button = (props: ButtonProps) => {




  const style = `flex justify-center gap-x-1 items-center text-sky-50 
  font-medium py-2 px-4 rounded-md 
  bg-gradient-to-b 
  from-csgo-400 to-csgo-500
  min-w-[150px]`;

  const Button = () => {

    if (props.icon) {
      return <button className={style}>
      <Heart title="heart"/>
      <span className="pl-2">
        {props.label}
      </span>
      </button>;
    } else {
      return  <button className={style}>      
      <span className="pl-2">
        {props.label}
      </span>
      </button>;
    }
  }



  return <Button />;
};

export default Button;