export function getListObject(array) {
    const { List } = require("immutable");
    return List([...array]);
}
export function addElementToList(list, element) {
    return list.concat(element);
}
