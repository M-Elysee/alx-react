#!/usr/bin/node
// a function that return a List containing the values of the two passed array arguments
export function concatElements(page1, page2) {
    const { List } = require('immutable');
    const page1List = List([...page1]);
    const page2List = List([...page2]);
    return page1List.concat(page2List);
}
// a function that returns the merge of 2 objects passed as argumments
export function mergeElements(page1, page2) {
    const { Map } = require('immutable');
    const page1Map = Map({...page1});
    const page2Map = Map({...page2});
    return page1Map.merge(page2Map);
}