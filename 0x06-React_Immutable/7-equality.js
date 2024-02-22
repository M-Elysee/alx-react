import 'immutable';
// a function that check if two immutable arrays are equal;
export default function areMapsEqual (map1, map2) {
  return map1.equals(map2);
}
