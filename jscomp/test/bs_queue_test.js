'use strict';

var Mt = require("./mt.js");
var Curry = require("../../lib/js/curry.js");
var Bs_Array = require("../../lib/js/bs_Array.js");
var Bs_Queue = require("../../lib/js/bs_Queue.js");
var Caml_obj = require("../../lib/js/caml_obj.js");
var Caml_builtin_exceptions = require("../../lib/js/caml_builtin_exceptions.js");

var suites = [/* [] */0];

var test_id = [0];

function eq(loc, x, y) {
  return Mt.eq_suites(test_id, suites, loc, x, y);
}

function b(loc, x) {
  return Mt.bool_suites(test_id, suites, loc, x);
}

function does_raise(f, q) {
  try {
    Curry._1(f, q);
    return /* false */0;
  }
  catch (exn){
    return /* true */1;
  }
}

function $plus$plus(q, x) {
  Bs_Queue.add(q, x);
  return q;
}

var q = Bs_Queue.make(/* () */0);

if (!(Caml_obj.caml_equal(Bs_Queue.toArray(q), /* int array */[]) && q.length === 0)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          21,
          2
        ]
      ];
}

if (!(Caml_obj.caml_equal(Bs_Queue.toArray((Bs_Queue.add(q, 1), q)), /* int array */[1]) && q.length === 1)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          22,
          2
        ]
      ];
}

if (!(Caml_obj.caml_equal(Bs_Queue.toArray((Bs_Queue.add(q, 2), q)), /* int array */[
          1,
          2
        ]) && q.length === 2)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          23,
          2
        ]
      ];
}

if (!(Caml_obj.caml_equal(Bs_Queue.toArray((Bs_Queue.add(q, 3), q)), /* int array */[
          1,
          2,
          3
        ]) && q.length === 3)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          24,
          2
        ]
      ];
}

if (!(Caml_obj.caml_equal(Bs_Queue.toArray((Bs_Queue.add(q, 4), q)), /* int array */[
          1,
          2,
          3,
          4
        ]) && q.length === 4)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          25,
          2
        ]
      ];
}

if (Bs_Queue.popExn(q) !== 1) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          26,
          2
        ]
      ];
}

if (!(Caml_obj.caml_equal(Bs_Queue.toArray(q), /* int array */[
          2,
          3,
          4
        ]) && q.length === 3)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          26,
          27
        ]
      ];
}

if (Bs_Queue.popExn(q) !== 2) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          27,
          2
        ]
      ];
}

if (!(Caml_obj.caml_equal(Bs_Queue.toArray(q), /* int array */[
          3,
          4
        ]) && q.length === 2)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          27,
          27
        ]
      ];
}

if (Bs_Queue.popExn(q) !== 3) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          28,
          2
        ]
      ];
}

if (!(Caml_obj.caml_equal(Bs_Queue.toArray(q), /* int array */[4]) && q.length === 1)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          28,
          27
        ]
      ];
}

if (Bs_Queue.popExn(q) !== 4) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          29,
          2
        ]
      ];
}

if (!(Caml_obj.caml_equal(Bs_Queue.toArray(q), /* int array */[]) && q.length === 0)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          29,
          27
        ]
      ];
}

if (!does_raise(Bs_Queue.popExn, q)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          30,
          2
        ]
      ];
}

var q$1 = Bs_Queue.make(/* () */0);

if (Bs_Queue.popExn((Bs_Queue.add(q$1, 1), q$1)) !== 1) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          35,
          2
        ]
      ];
}

if (!does_raise(Bs_Queue.popExn, q$1)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          35,
          34
        ]
      ];
}

if (Bs_Queue.popExn((Bs_Queue.add(q$1, 2), q$1)) !== 2) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          36,
          2
        ]
      ];
}

if (!does_raise(Bs_Queue.popExn, q$1)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          36,
          34
        ]
      ];
}

if (q$1.length !== 0) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          37,
          2
        ]
      ];
}

var q$2 = Bs_Queue.make(/* () */0);

if (Bs_Queue.peekExn((Bs_Queue.add(q$2, 1), q$2)) !== 1) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          42,
          2
        ]
      ];
}

if (Bs_Queue.peekExn((Bs_Queue.add(q$2, 2), q$2)) !== 1) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          43,
          2
        ]
      ];
}

if (Bs_Queue.peekExn((Bs_Queue.add(q$2, 3), q$2)) !== 1) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          44,
          2
        ]
      ];
}

if (Bs_Queue.peekExn(q$2) !== 1) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          45,
          2
        ]
      ];
}

if (Bs_Queue.popExn(q$2) !== 1) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          45,
          28
        ]
      ];
}

if (Bs_Queue.peekExn(q$2) !== 2) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          46,
          2
        ]
      ];
}

if (Bs_Queue.popExn(q$2) !== 2) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          46,
          28
        ]
      ];
}

if (Bs_Queue.peekExn(q$2) !== 3) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          47,
          2
        ]
      ];
}

if (Bs_Queue.popExn(q$2) !== 3) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          47,
          28
        ]
      ];
}

if (!does_raise(Bs_Queue.peekExn, q$2)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          48,
          2
        ]
      ];
}

if (!does_raise(Bs_Queue.peekExn, q$2)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          49,
          2
        ]
      ];
}

var q$3 = Bs_Queue.make(/* () */0);

for(var i = 1; i <= 10; ++i){
  Bs_Queue.add(q$3, i);
}

Bs_Queue.clear(q$3);

if (q$3.length !== 0) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          56,
          2
        ]
      ];
}

if (!does_raise(Bs_Queue.popExn, q$3)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          57,
          2
        ]
      ];
}

if (!Caml_obj.caml_equal(q$3, Bs_Queue.make(/* () */0))) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          58,
          2
        ]
      ];
}

Bs_Queue.add(q$3, 42);

if (Bs_Queue.popExn(q$3) !== 42) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          60,
          2
        ]
      ];
}

var q1 = Bs_Queue.make(/* () */0);

for(var i$1 = 1; i$1 <= 10; ++i$1){
  Bs_Queue.add(q1, i$1);
}

var q2 = Bs_Queue.copy(q1);

if (!Caml_obj.caml_equal(Bs_Queue.toArray(q1), /* array */[
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ])) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          67,
          2
        ]
      ];
}

if (!Caml_obj.caml_equal(Bs_Queue.toArray(q2), /* array */[
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ])) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          68,
          2
        ]
      ];
}

if (q1.length !== 10) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          69,
          2
        ]
      ];
}

if (q2.length !== 10) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          70,
          2
        ]
      ];
}

for(var i$2 = 1; i$2 <= 10; ++i$2){
  if (Bs_Queue.popExn(q1) !== i$2) {
    throw [
          Caml_builtin_exceptions.assert_failure,
          [
            "bs_queue_test.ml",
            72,
            4
          ]
        ];
  }
  
}

for(var i$3 = 1; i$3 <= 10; ++i$3){
  if (Bs_Queue.popExn(q2) !== i$3) {
    throw [
          Caml_builtin_exceptions.assert_failure,
          [
            "bs_queue_test.ml",
            75,
            4
          ]
        ];
  }
  
}

var q$4 = Bs_Queue.make(/* () */0);

if (q$4.length !== 0) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          81,
          2
        ]
      ];
}

for(var i$4 = 1; i$4 <= 10; ++i$4){
  Bs_Queue.add(q$4, i$4);
  if (q$4.length !== i$4) {
    throw [
          Caml_builtin_exceptions.assert_failure,
          [
            "bs_queue_test.ml",
            84,
            4
          ]
        ];
  }
  if (!q$4.length) {
    throw [
          Caml_builtin_exceptions.assert_failure,
          [
            "bs_queue_test.ml",
            85,
            4
          ]
        ];
  }
  
}

for(var i$5 = 10; i$5 >= 1; --i$5){
  if (q$4.length !== i$5) {
    throw [
          Caml_builtin_exceptions.assert_failure,
          [
            "bs_queue_test.ml",
            88,
            4
          ]
        ];
  }
  if (!q$4.length) {
    throw [
          Caml_builtin_exceptions.assert_failure,
          [
            "bs_queue_test.ml",
            89,
            4
          ]
        ];
  }
  Bs_Queue.popExn(q$4);
}

if (q$4.length !== 0) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          92,
          2
        ]
      ];
}

if (q$4.length !== 0) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          93,
          2
        ]
      ];
}

var q$5 = Bs_Queue.make(/* () */0);

for(var i$6 = 1; i$6 <= 10; ++i$6){
  Bs_Queue.add(q$5, i$6);
}

var i$7 = [1];

Bs_Queue.forEach(q$5, (function (j) {
        if (i$7[0] !== j) {
          throw [
                Caml_builtin_exceptions.assert_failure,
                [
                  "bs_queue_test.ml",
                  100,
                  29
                ]
              ];
        }
        i$7[0] = i$7[0] + 1 | 0;
        return /* () */0;
      }));

var q1$1 = Bs_Queue.make(/* () */0);

var q2$1 = Bs_Queue.make(/* () */0);

if (q1$1.length !== 0) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          105,
          2
        ]
      ];
}

if (!Caml_obj.caml_equal(Bs_Queue.toArray(q1$1), /* array */[])) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          105,
          26
        ]
      ];
}

if (q2$1.length !== 0) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          106,
          2
        ]
      ];
}

if (!Caml_obj.caml_equal(Bs_Queue.toArray(q2$1), /* array */[])) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          106,
          26
        ]
      ];
}

Bs_Queue.transfer(q1$1, q2$1);

if (q1$1.length !== 0) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          108,
          2
        ]
      ];
}

if (!Caml_obj.caml_equal(Bs_Queue.toArray(q1$1), /* array */[])) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          108,
          26
        ]
      ];
}

if (q2$1.length !== 0) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          109,
          2
        ]
      ];
}

if (!Caml_obj.caml_equal(Bs_Queue.toArray(q2$1), /* array */[])) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          109,
          26
        ]
      ];
}

var q1$2 = Bs_Queue.make(/* () */0);

var q2$2 = Bs_Queue.make(/* () */0);

for(var i$8 = 1; i$8 <= 4; ++i$8){
  Bs_Queue.add(q1$2, i$8);
}

if (q1$2.length !== 4) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          115,
          2
        ]
      ];
}

if (!Caml_obj.caml_equal(Bs_Queue.toArray(q1$2), /* int array */[
        1,
        2,
        3,
        4
      ])) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          115,
          26
        ]
      ];
}

if (q2$2.length !== 0) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          116,
          2
        ]
      ];
}

if (!Caml_obj.caml_equal(Bs_Queue.toArray(q2$2), /* int array */[])) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          116,
          26
        ]
      ];
}

Bs_Queue.transfer(q1$2, q2$2);

if (q1$2.length !== 0) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          118,
          2
        ]
      ];
}

if (!Caml_obj.caml_equal(Bs_Queue.toArray(q1$2), /* int array */[])) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          118,
          26
        ]
      ];
}

if (q2$2.length !== 4) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          119,
          2
        ]
      ];
}

if (!Caml_obj.caml_equal(Bs_Queue.toArray(q2$2), /* int array */[
        1,
        2,
        3,
        4
      ])) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          119,
          26
        ]
      ];
}

var q1$3 = Bs_Queue.make(/* () */0);

var q2$3 = Bs_Queue.make(/* () */0);

for(var i$9 = 5; i$9 <= 8; ++i$9){
  Bs_Queue.add(q2$3, i$9);
}

if (q1$3.length !== 0) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          125,
          2
        ]
      ];
}

if (!Caml_obj.caml_equal(Bs_Queue.toArray(q1$3), /* int array */[])) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          125,
          26
        ]
      ];
}

if (q2$3.length !== 4) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          126,
          2
        ]
      ];
}

if (!Caml_obj.caml_equal(Bs_Queue.toArray(q2$3), /* int array */[
        5,
        6,
        7,
        8
      ])) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          126,
          26
        ]
      ];
}

Bs_Queue.transfer(q1$3, q2$3);

if (q1$3.length !== 0) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          128,
          2
        ]
      ];
}

if (!Caml_obj.caml_equal(Bs_Queue.toArray(q1$3), /* int array */[])) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          128,
          26
        ]
      ];
}

if (q2$3.length !== 4) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          129,
          2
        ]
      ];
}

if (!Caml_obj.caml_equal(Bs_Queue.toArray(q2$3), /* int array */[
        5,
        6,
        7,
        8
      ])) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          129,
          26
        ]
      ];
}

var q1$4 = Bs_Queue.make(/* () */0);

var q2$4 = Bs_Queue.make(/* () */0);

for(var i$10 = 1; i$10 <= 4; ++i$10){
  Bs_Queue.add(q1$4, i$10);
}

for(var i$11 = 5; i$11 <= 8; ++i$11){
  Bs_Queue.add(q2$4, i$11);
}

if (q1$4.length !== 4) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          136,
          2
        ]
      ];
}

if (!Caml_obj.caml_equal(Bs_Queue.toArray(q1$4), /* int array */[
        1,
        2,
        3,
        4
      ])) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          136,
          26
        ]
      ];
}

if (q2$4.length !== 4) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          137,
          2
        ]
      ];
}

if (!Caml_obj.caml_equal(Bs_Queue.toArray(q2$4), /* int array */[
        5,
        6,
        7,
        8
      ])) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          137,
          26
        ]
      ];
}

Bs_Queue.transfer(q1$4, q2$4);

if (q1$4.length !== 0) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          139,
          2
        ]
      ];
}

if (!Caml_obj.caml_equal(Bs_Queue.toArray(q1$4), /* int array */[])) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          139,
          26
        ]
      ];
}

var v = /* array */[
  5,
  6,
  7,
  8,
  1,
  2,
  3,
  4
];

if (q2$4.length !== 8) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          141,
          2
        ]
      ];
}

if (!Caml_obj.caml_equal(Bs_Queue.toArray(q2$4), v)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          141,
          26
        ]
      ];
}

if (Bs_Queue.reduce(q2$4, 0, (function (x, y) {
          return x - y | 0;
        })) !== Bs_Array.reduce(v, 0, (function (x, y) {
          return x - y | 0;
        }))) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "bs_queue_test.ml",
          143,
          2
        ]
      ];
}

console.log("OK");

var q$6 = Bs_Queue.ofArray(/* int array */[
      1,
      2,
      3,
      4
    ]);

var q1$5 = Bs_Queue.map(q$6, (function (x) {
        return x - 1 | 0;
      }));

eq("File \"bs_queue_test.ml\", line 154, characters 5-12", Bs_Queue.toArray(q1$5), /* int array */[
      0,
      1,
      2,
      3
    ]);

var q$7 = Bs_Queue.ofArray(/* array */[]);

b("File \"bs_queue_test.ml\", line 155, characters 4-11", +(q$7.length === 0));

var q$8 = Bs_Queue.map(Bs_Queue.ofArray(/* int array */[]), (function (x) {
        return x + 1 | 0;
      }));

b("File \"bs_queue_test.ml\", line 156, characters 4-11", +(q$8.length === 0));

Mt.from_pair_suites("bs_queue_test.ml", suites[0]);

var Q = 0;

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.b = b;
exports.Q = Q;
exports.does_raise = does_raise;
exports.$plus$plus = $plus$plus;
/* q Not a pure module */