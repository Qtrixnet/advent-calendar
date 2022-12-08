import "./days.scss";
import {FC} from 'react';
import days from "../../utils/days";
import Day from "../day/day";

const Days: FC = () => {
  return (
    <div className="days">
      <div className="days__container">
        {
          days.map(day => (<Day day={day} key={day.id}/>))
        }
      </div>
    </div>
  );
};

export default Days;
