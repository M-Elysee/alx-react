#!/usr/bin/node
function getImmutableObject(object) {
    const { Map } = require('immutable'); 
    const map1 = Map({ ...object});
    return map1;
}