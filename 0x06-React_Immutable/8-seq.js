import { Seq } from 'immutable';

export default function printBestStudent (object) {
  const nested = Seq(object);
  const nested2 = nested.filter(value => {
    return value.score > 70;
  });
  const obj = nested2.toJS();

  Object.keys(obj).map((key) => {
    obj[key].firstName = obj[key].firstName.charAt(0).toUpperCase() +
                     obj[key].firstName.slice(1);
    obj[key].lastName = obj[key].lastName.charAt(0).toUpperCase() +
                     obj[key].lastName.slice(1);
    return obj[key];
  });
  console.log(obj);
}
