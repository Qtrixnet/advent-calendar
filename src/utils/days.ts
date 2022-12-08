import {v4 as uuidv4} from 'uuid';
import {UNDER_URL} from "./constants";
import {IDay} from "../types/types";

// const days: any[] = [
//   {
//     id: uuidv4(),
//     dateText: '12 декабря',
//     date: Date.parse(`December 12, 2022 00:00:00`),
//     title: 'День мандаринов',
//     image: `${UNDER_URL}/mandarin.png`,
//   }
// ]

const days: IDay[] = [];
const daysCount = 20;
const dayStart = 1;

for (let i = 0; i < daysCount; i++) {
  days.push({
    id: uuidv4(),
    dateText: `${i + dayStart} декабря`,
    date: Date.parse(`December ${i + dayStart}, 2022 00:00:00`),
    title: 'День мандаринов',
    image: `${UNDER_URL}/mandarin.png`,
  })
}

export default days;
