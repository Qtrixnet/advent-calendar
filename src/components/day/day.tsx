import "./day.scss";
import {FC} from 'react';
import {IDay} from "../../types/types";
import getRandomNumber from "../../utils/get-random-number";

interface IDayProps {
  day: IDay
}

const Day: FC<IDayProps> = ({day}) => {
  const {dateText, title, image} = day;

  return (
    <div className="day" style={{transform: `rotate(${getRandomNumber(-5, 5)}deg)`}}>
      <span className="day__count">{parseInt(dateText, 10)}</span>
      <img
        src={image}
        alt={title}
        draggable={false}
        className="day__image"
      />
      <span className="day__title">{title}</span>
    </div>
  );
};

export default Day;
