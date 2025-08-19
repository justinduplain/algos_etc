// Converts a URL Query String into an object map
function convertQueryToMap(query) {
  const myMap = {};
  if(query.length < 1) return myMap;
  const props = query.split('&')
  props.forEach(prop => {
    const propParents = prop.split('.') 
    const propName = propParents.pop().split('=') 
    let myMapPointer = myMap;
    propParents.forEach((value) => {
      myMapPointer[value] = myMapPointer[value] || {};
      myMapPointer = myMapPointer[value];
    })
    myMapPointer[propName[0]] = decodeURIComponent(propName[1])
  })
  return myMap;
}
