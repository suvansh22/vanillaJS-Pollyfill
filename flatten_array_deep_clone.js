const createDeepCopyPolyfill = (obj) => {
  var temp;
  if (typeof obj === "object") {
    if (Array.isArray(obj)) {
      temp = [];
      obj.forEach((value, index) => {
        temp[index] = createDeepCopyPolyfill(value);
      });
      return temp;
    } else {
      temp = {};
      Object.keys(obj).forEach((key) => {
        temp[key] = createDeepCopyPolyfill(obj[key]);
      });
      return temp;
    }
  }
  return obj;
};
