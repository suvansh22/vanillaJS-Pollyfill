const createDeepCopy = (obj) => {
  var temp;
  function createDeepCopyHelper(value, key){
    if(typeof value === "object" && value !== null){
      temp[key] = createDeepCopy(value);
    }else {
      temp[key] = value;
    }
  }
  if(typeof obj  === "object" && Array.isArray(obj)) {
  temp = [];
    obj.map((value, index)=> createDeepCopyHelper(value, index));
    return temp;
  }
  temp = {};
  Object.keys(obj).map((key)=> createDeepCopyHelper(obj[key], key))
  return temp;
}
