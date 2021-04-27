var xuchanghu725 = {
  isNull: function (val) {
    if (val === null) {
      return true;
    } else {
      return false;
    }
  },
  isNaN: function (val) {
    if (val === NaN) {
      return true;
    } else {
      return false;
    }
  },
  before: function (n, func) {
    var i = 0;
    var result;
    return function (...args) {
      i++;
      if (i < n) {
        result = func(...args);
      }
      return result;
    };
  },
  after: function (n, func) {
    var i = 0;
    return function (...args) {
      i++;
      if (i > n) {
        return func(...args);
      }
    };
  },
  ary: function (func, n = func.length) {
    return function (...args) {
      return func(...args.slice(0, n));
    };
  },
  unary: function (func) {
    //return ary(func,1)
    return function (arg) {
      return func(arg);
    };
  },
  flip: function (func) {
    return function (...args) {
      return func(...args.reverse());
    };
  },
  negate: function (func) {
    return function (...args) {
      return !func(...args);
    };
  },
  spread: function (func) {
    return function (...args) {
      return func(...ary);
    };
  },
  bind: function (f, ...fixedArgs) {
    return function bound(...args) {
      var copy = fixedArgs.slice();
      var j = 0;
      for (var i = 0; i < copy.length; i++) {
        if (copy[i] === null) {
          copy[i] = args[j++];
        }
      }
      while (j < args.length) {
        copy.push(args[j++]);
      }
      return f(...copy);
    };
  },
  forEach: function (ary, action) {
    for (var i = 0; i < ary.length; i++) {
      var item = action(ary[i], i);
      if (item === false) {
        break;
      }
    }
  },
};
