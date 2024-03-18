export default function Question8() {
  /*------ Keys of an Object can be Strings and Symbols, whereas keys of a Map can be any value: ------*/
  // Object with string key.
  let objectKey = {};
  objectKey['foo'] = 'bar';
  console.log('objectKey', objectKey);

  // Object with symbol key.
  let symbolKey = Symbol();
  let obj = {};
  obj[symbolKey] = 'value';
  console.log('obj', obj);

  // Map with key types.
  let map = new Map();
  console.log('map', map);
  map.set('stringKey', 'value');
  map.set(symbolKey, 'value');
  map.set(obj, 'value');
  console.log('map*', map);
}