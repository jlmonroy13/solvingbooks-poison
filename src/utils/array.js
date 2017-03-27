function reduceArrayToObject(obj, item) {
  return {
    ...obj,
    [item.id]: item,
  };
}

function reduceArrayToIndexObject(obj, item, index) {
  return {
    ...obj,
    [index]: item,
  };
}

function reduceArrayToMergedObject(acc, obj) {
  return {
    ...acc,
    ...obj,
  };
}

function reduceArrayToObjectByNumber(acc, item) {
  return {
    ...acc,
    [item.number]: item,
  };
}

function toObjectByNumber(array) {
  return array
    .reduce(reduceArrayToObjectByNumber, {});
}

function toObject(array) {
  return array
    .reduce(reduceArrayToObject, {});
}

function toIndexObject(array) {
  return array
    .reduce(reduceArrayToIndexObject, {});
}

function toMergedObject(array) {
  return array
    .reduce(reduceArrayToMergedObject, {});
}

const ArrayUtils = {
  toObject,
  toObjectByNumber,
  toIndexObject,
  toMergedObject,
};

export default ArrayUtils;
