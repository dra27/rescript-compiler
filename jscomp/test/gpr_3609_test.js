'use strict';


function func(state) {
  if (typeof state === "number") {
    return 0;
  } else {
    return 0 + state._0 | 0;
  }
}

exports.func = func;
/* No side effect */
