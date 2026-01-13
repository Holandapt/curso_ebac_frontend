"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
var aluno = /*#__PURE__*/_createClass(function aluno(nomeDoAluno, notaDoAluno) {
  _classCallCheck(this, aluno);
  this.Nome = nomeDoAluno;
  this.Nota = notaDoAluno;
});
var alunos = [];
var aluno1 = new aluno('Joao', 6.5);
var aluno2 = new aluno('Lucas', 5.0);
var aluno3 = new aluno('Maria', 7.0);
var aluno4 = new aluno('Mathias', 8.5);
var aluno5 = new aluno('Rodney', 4);
alunos.push(aluno1, aluno2, aluno3, aluno4, aluno5);
var alunosAprv = alunos.filter(function (aprv) {
  return aprv.Nota >= 6;
});
console.log(alunosAprv);