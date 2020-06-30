import { data } from '../../data';

export const cleanUp = (timeCheck: number) => {
  const now = Date.now();
  const length = data.length;
 
  let counter = 0;

  while (counter < length) {
    if (now - data[counter].time > timeCheck) {
      data.splice(0, counter + 1);
      break;
    } else {
      counter += 1;
    }
  }
};





