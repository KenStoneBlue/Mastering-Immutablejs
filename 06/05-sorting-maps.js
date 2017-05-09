import { Map, OrderedMap } from 'immutable';

const myMap = Map.of(
  'three', 3,
  'one', 1,
  'four', 4,
  'two', 2
);

// We can sort maps using the sort() method, but
// to preserve the sort order, we need to convert
// it to an ordered map.
const mySortedMap = myMap
  .sort()
  .toOrderedMap();

// Using the sort() method sorts maps by value. Using
// sortBy(), we can pass a simple callback that allows
// us to sort by key.
const mySortedByKeyMap = myMap
  .sortBy((v, k) => k);

myMap.forEach(
  (v, k) => console.log('myMap', `${k} => ${v}`)
);
// -> myMap three => 3
// -> myMap one => 1
// -> myMap four => 4
// -> myMap two => 2


mySortedMap.forEach(
  (v, k) => console.log('mySortedMap', `${k} => ${v}`)
);
// -> mySortedMap one => 1
// -> mySortedMap two => 2
// -> mySortedMap three => 3
// -> mySortedMap four => 4
