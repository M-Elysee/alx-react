#!/usr/bin/node

export default function mergeDeeplyElements(page1, page2) {
    const {Map} = require("immutable");
    const page1Map = Map({...page1});
    const page2Map = Map({...page2});
    return page1Map.mergeDeep(page2Map);
}