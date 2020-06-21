import { data } from '../../data';
import { oneHour } from './constants';

export const cleanUp = () => {
  const now = Date.now();
  const length = data.length;
 
  let counter = 0;

  while (counter < length) {
    if (now - data[counter].time > oneHour) {
      data.splice(0, counter + 1);
      break;
    } else {
      counter += 1;
    }
  }
};





