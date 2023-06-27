function PromisePollyfill(executor) {
  let onResolve;
  let onReject;
  let isCalled = false;
  let isFullfilled = false;
  let isRejected = false;
  let value;

  this.then = (thenHandler) => {
    onResolve = thenHandler;
    if (isFullfilled && !isCalled) {
      onResolve(value);
      isCalled = true;
    }
    return this;
  };

  this.catch = (catchHandler) => {
    onReject = catchHandler;
    if (isRejected && !isCalled) {
      onReject(value);
      isCalled = true;
    }
    return this;
  };

  function resolve(val) {
    isFullfilled = true;
    value = val;
    if (typeof onResolve === "function" && !isCalled) {
      onResolve(val);
      isCalled = true;
    }
  }

  function reject(val) {
    isRejected = true;
    value = val;
    if (typeof onReject === "function" && !isCalled) {
      onReject(val);
      isCalled = true;
    }
  }
