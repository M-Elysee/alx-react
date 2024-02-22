import { fromJS } from 'immutable';

export default function getImmutableObject (object) {
  const map1 = fromJS({ ...object });
  return map1;
}
