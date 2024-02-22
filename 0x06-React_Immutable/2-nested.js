export default function accessImmutableObject(object, array) {
    const { fromJS } = require('immutable');
    const nested = fromJS({...object});
    return nested.getIn([...array]);
}
