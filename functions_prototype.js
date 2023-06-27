Function.prototype.callPolyfill = function(obj, ...arg) {
    obj.fn = this;
    obj.fn(...arg);
}
Function.prototype.appyPolyfill = function(obj, arg) {
    obj.fn = this;
    obj(...arg);
}
Function.prototype.bindPolyfill = function(obj){
    const func = this;
    return function() {
        func.apply(obj);
    }
}
