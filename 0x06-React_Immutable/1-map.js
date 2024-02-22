import { Map } from 'immutable';

export default function getImmutableObject (object) {
  const map1 = Map({ ...object });
  return map1;
}
