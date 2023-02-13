import React from "react";

export interface CardProps {
  label: string;
  color?: string;
  element?: JSX.Element;
}

const Card = (props: CardProps) => {

    const CardWrapper = () => {

        return (
            <div>
                Карточка
            </div>
        )
    }

  return <CardWrapper />;
};

export default Card;
