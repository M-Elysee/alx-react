import { List, Map } from 'immutable';

export function concatElements (page1, page2) {
  // this func returns a List of  values of the two passed array arguments
  const page1List = List([...page1]);
  const page2List = List([...page2]);
  return page1List.concat(page2List);
}

export function mergeElements (page1, page2) {
  // a function that returns the merge of 2 objects passed as argumments
  const page1Map = Map({ ...page1 });
  const page2Map = Map({ ...page2 });
  return page1Map.merge(page2Map);
}
