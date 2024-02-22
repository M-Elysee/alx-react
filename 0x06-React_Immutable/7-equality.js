import { is } from 'immutable';

export default function areMapsEqual (map1, map2) {
  /*a function that check if two immutable arrays are equal;*/
  return is(map1, map2);
}
