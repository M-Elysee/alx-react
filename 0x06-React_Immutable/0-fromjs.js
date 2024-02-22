#!/usr/bin/node
export default function getImmutableObject(object) {
    const { fromJS } = require('immutable'); 
    const map1 = fromJS({ ...object});
    return map1;
}