'use strict';


function f_list(x) {
  if (!x) {
    return 0;
  }
  var match = x._1;
  if (!match) {
    return 0;
  }
  var match$1 = match._1;
  if (!match$1) {
    return 0;
  }
  var match$2 = match$1._1;
  if (!match$2) {
    return 0;
  }
  var match$3 = match$2._1;
  if (!match$3) {
    return 0;
  }
  var match$4 = match$3._1;
  if (match$4) {
    return ((((x._0 + match._0 | 0) + match$1._0 | 0) + match$2._0 | 0) + match$3._0 | 0) + match$4._0 | 0;
  } else {
    return 0;
  }
}

function f_arr(x) {
  if (x.length !== 6) {
    return 0;
  }
  var a0 = x[0];
  var a1 = x[1];
  var a2 = x[2];
  var a3 = x[3];
  var a4 = x[4];
  var a5 = x[5];
  return ((((a0 + a1 | 0) + a2 | 0) + a3 | 0) + a4 | 0) + a5 | 0;
}

function f_opion(x) {
  var match = x.hi;
  if (match !== 2) {
    if (match !== 3) {
      return 0;
    }
    var match$1 = x.lo;
    if (!match$1) {
      return 0;
    }
    if (match$1._0 !== undefined) {
      return 0;
    }
    var match$2 = match$1._1;
    if (!match$2) {
      return 0;
    }
    if (match$2._0 !== undefined) {
      return 0;
    }
    var match$3 = match$2._1;
    if (!match$3) {
      return 0;
    }
    var match$4 = match$3._0;
    if (match$4 === undefined) {
      return 0;
    }
    if (match$4 !== 2) {
      return 0;
    }
    var match$5 = match$3._1;
    if (!match$5) {
      return 0;
    }
    var match$6 = match$5._0;
    if (match$6 === undefined) {
      return 0;
    }
    if (match$6 !== 1) {
      return 0;
    }
    var match$7 = match$5._1;
    if (match$7 && match$7._0 !== undefined) {
      return 2;
    } else {
      return 0;
    }
  }
  var match$8 = x.lo;
  if (!match$8) {
    return 0;
  }
  if (match$8._0 !== undefined) {
    return 0;
  }
  var match$9 = match$8._1;
  if (!match$9) {
    return 0;
  }
  if (match$9._0 !== undefined) {
    return 0;
  }
  var match$10 = match$9._1;
  if (!match$10) {
    return 0;
  }
  var match$11 = match$10._0;
  if (match$11 === undefined) {
    return 0;
  }
  if (match$11 !== 2) {
    return 0;
  }
  var match$12 = match$10._1;
  if (!match$12) {
    return 0;
  }
  var match$13 = match$12._0;
  if (match$13 === undefined) {
    return 0;
  }
  if (match$13 !== 1) {
    return 0;
  }
  var match$14 = match$12._1;
  if (match$14 && match$14._0 !== undefined) {
    return 3;
  } else {
    return 0;
  }
}

exports.f_list = f_list;
exports.f_arr = f_arr;
exports.f_opion = f_opion;
/* No side effect */
