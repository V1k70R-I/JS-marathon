// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function random(max) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var num = max - min;
  return Math.ceil(Math.random() * num) + min;
}

var _default = random;
exports.default = _default;
},{}],"elements.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$logs = exports.$btnLowKick = exports.$btnCharcterUltimateaAttack = exports.$btnDefaultAttack = void 0;

function $getElementById(id) {
  return document.getElementById(id);
}

var $btnDefaultAttack = $getElementById('btn-kick-default');
exports.$btnDefaultAttack = $btnDefaultAttack;
var $btnCharcterUltimateaAttack = $getElementById('btn-kick-ult-character');
exports.$btnCharcterUltimateaAttack = $btnCharcterUltimateaAttack;
var $btnLowKick = $getElementById('btn-kick-low-kick');
exports.$btnLowKick = $btnLowKick;
var $logs = $getElementById('logs');
exports.$logs = $logs;
},{}],"pokemon.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _elements = require("./elements.js");

var _pokemonscreate = require("./pokemonscreate.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Selectors = function Selectors(name) {
  _classCallCheck(this, Selectors);

  this.elHP = document.getElementById("health-".concat(name));
  this.elProgressbar = document.getElementById("progressbar-".concat(name));
};

var Pokemon = /*#__PURE__*/function (_Selectors) {
  _inherits(Pokemon, _Selectors);

  var _super = _createSuper(Pokemon);

  function Pokemon(_ref) {
    var _this;

    var name = _ref.name,
        hp = _ref.hp,
        type = _ref.type,
        selectors = _ref.selectors;

    _classCallCheck(this, Pokemon);

    _this = _super.call(this, selectors);

    _defineProperty(_assertThisInitialized(_this), "changeHP", function (count) {
      if (_this.hp.current <= count) {
        _this.hp.current = 0;

        if (_this.name === 'Pikachu') {
          alert('ТЫ ПРОИГРАЛ!!!');
        } else if (_this.name === 'Charmander') {
          alert('ТЫ ПОБЕДИЛ!!!  ');
        }

        _elements.$btnDefaultAttack.disabled = true;
        _elements.$btnCharcterUltimateaAttack.disabled = true;
        _elements.$btnLowKick.disabled = true;
      } else {
        _this.hp.current -= count;
      }

      _this.renderHP();

      return count;
    });

    _defineProperty(_assertThisInitialized(_this), "renderHP", function () {
      _this.renderHPLife();

      _this.renderProgressbarHP();
    });

    _defineProperty(_assertThisInitialized(_this), "renderHPLife", function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
          elHP = _assertThisInitialize.elHP,
          _assertThisInitialize2 = _assertThisInitialize.hp,
          current = _assertThisInitialize2.current,
          total = _assertThisInitialize2.total;

      elHP.innerText = current + '/' + total;
    });

    _defineProperty(_assertThisInitialized(_this), "renderProgressbarHP", function () {
      var _assertThisInitialize3 = _assertThisInitialized(_this),
          _assertThisInitialize4 = _assertThisInitialize3.hp,
          current = _assertThisInitialize4.current,
          total = _assertThisInitialize4.total,
          elProgressbar = _assertThisInitialize3.elProgressbar;

      var procent = current / (total / 100);
      elProgressbar.style.width = procent + '%';
    });

    _this.name = name;
    _this.hp = {
      current: hp,
      total: hp
    };
    _this.type = type;

    _this.renderHP();

    return _this;
  }

  return Pokemon;
}(Selectors);

var _default = Pokemon;
exports.default = _default;
},{"./elements.js":"elements.js","./pokemonscreate.js":"pokemonscreate.js"}],"pokemonscreate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.player2 = exports.player1 = void 0;

var _pokemon = _interopRequireDefault(require("./pokemon.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player1 = new _pokemon.default({
  name: 'Pikachu',
  type: 'electric',
  hp: 100,
  selectors: 'character'
});
exports.player1 = player1;
var player2 = new _pokemon.default({
  name: 'Charmander',
  hp: 100,
  type: 'fire',
  selectors: 'enemy'
});
exports.player2 = player2;
},{"./pokemon.js":"pokemon.js"}],"logs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writeLog4Enemy = exports.writeLog4Player = void 0;

var _pokemonscreate = require("./pokemonscreate.js");

var _main = require("./main.js");

var _elements = require("./elements.js");

function generateLog(whoDamaged, whoHit, count) {
  var name = whoDamaged.name,
      _whoDamaged$hp = whoDamaged.hp,
      current = _whoDamaged$hp.current,
      total = _whoDamaged$hp.total;
  var enemyName = whoHit.name;
  var logs = ["".concat(name, " \u0432\u0441\u043F\u043E\u043C\u043D\u0438\u043B \u0447\u0442\u043E-\u0442\u043E \u0432\u0430\u0436\u043D\u043E\u0435, \u043D\u043E \u043D\u0435\u043E\u0436\u0438\u0434\u0430\u043D\u043D\u043E ").concat(enemyName, ", \u043D\u0435 \u043F\u043E\u043C\u043D\u044F \u0441\u0435\u0431\u044F \u043E\u0442 \u0438\u0441\u043F\u0443\u0433\u0430, \u0443\u0434\u0430\u0440\u0438\u043B \u0432 \u043F\u0440\u0435\u0434\u043F\u043B\u0435\u0447\u044C\u0435 \u0432\u0440\u0430\u0433\u0430. - ").concat(count, "  hp. \u0423 ").concat(name, " [").concat(current, "/").concat(total, "]"), "".concat(name, " \u043F\u043E\u043F\u0435\u0440\u0445\u043D\u0443\u043B\u0441\u044F, \u0438 \u0437\u0430 \u044D\u0442\u043E ").concat(enemyName, " \u0441 \u0438\u0441\u043F\u0443\u0433\u0443 \u043F\u0440\u0438\u043B\u043E\u0436\u0438\u043B \u043F\u0440\u044F\u043C\u043E\u0439 \u0443\u0434\u0430\u0440 \u043A\u043E\u043B\u0435\u043D\u043E\u043C \u0432 \u043B\u043E\u0431 \u0432\u0440\u0430\u0433\u0430. - ").concat(count, " hp. \u0423 ").concat(name, " [").concat(current, "/").concat(total, "]"), "".concat(name, " \u043F\u0440\u0438\u0448\u0435\u043B \u0432 \u0441\u0435\u0431\u044F, \u043D\u043E \u043D\u0435\u043E\u0436\u0438\u0434\u0430\u043D\u043D\u043E ").concat(enemyName, " \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u043E \u043D\u0430\u043D\u0435\u0441 \u043C\u043E\u0449\u043D\u0435\u0439\u0448\u0438\u0439 \u0443\u0434\u0430\u0440. - ").concat(count, " hp. \u0423 ").concat(name, " [").concat(current, "/").concat(total, "]"), "".concat(name, " \u043F\u043E\u043F\u0435\u0440\u0445\u043D\u0443\u043B\u0441\u044F, \u043D\u043E \u0432 \u044D\u0442\u043E \u0432\u0440\u0435\u043C\u044F ").concat(enemyName, " \u043D\u0435\u0445\u043E\u0442\u044F \u0440\u0430\u0437\u0434\u0440\u043E\u0431\u0438\u043B \u043A\u0443\u043B\u0430\u043A\u043E\u043C <\u0432\u044B\u0440\u0435\u0437\u0430\u043D\u043D\u043E \u0446\u0435\u043D\u0437\u0443\u0440\u043E\u0439> \u043F\u0440\u043E\u0442\u0438\u0432\u043D\u0438\u043A\u0430. - ").concat(count, " hp. \u0423 ").concat(name, " [").concat(current, "/").concat(total, "]"), "".concat(name, " \u0443\u0434\u0438\u0432\u0438\u043B\u0441\u044F, \u0430 ").concat(enemyName, " \u043F\u043E\u0448\u0430\u0442\u043D\u0443\u0432\u0448\u0438\u0441\u044C \u0432\u043B\u0435\u043F\u0438\u043B \u043F\u043E\u0434\u043B\u044B\u0439 \u0443\u0434\u0430\u0440. - ").concat(count, " hp. \u0423 ").concat(name, " [").concat(current, "/").concat(total, "]"), "".concat(name, " \u0432\u044B\u0441\u043C\u043E\u0440\u043A\u0430\u043B\u0441\u044F, \u043D\u043E \u043D\u0435\u043E\u0436\u0438\u0434\u0430\u043D\u043D\u043E ").concat(enemyName, " \u043F\u0440\u043E\u0432\u0435\u043B \u0434\u0440\u043E\u0431\u044F\u0449\u0438\u0439 \u0443\u0434\u0430\u0440. - ").concat(count, " hp. \u0423 ").concat(name, " [").concat(current, "/").concat(total, "]"), "".concat(name, " \u043F\u043E\u0448\u0430\u0442\u043D\u0443\u043B\u0441\u044F, \u0438 \u0432\u043D\u0435\u0437\u0430\u043F\u043D\u043E \u043D\u0430\u0433\u043B\u044B\u0439 ").concat(enemyName, " \u0431\u0435\u0441\u043F\u0440\u0438\u0447\u0438\u043D\u043D\u043E \u0443\u0434\u0430\u0440\u0438\u043B \u0432 \u043D\u043E\u0433\u0443 \u043F\u0440\u043E\u0442\u0438\u0432\u043D\u0438\u043A\u0430. - ").concat(count, " hp. \u0423 ").concat(name, " [").concat(current, "/").concat(total, "]"), "".concat(name, " \u0440\u0430\u0441\u0441\u0442\u0440\u043E\u0438\u043B\u0441\u044F, \u043A\u0430\u043A \u0432\u0434\u0440\u0443\u0433, \u043D\u0435\u043E\u0436\u0438\u0434\u0430\u043D\u043D\u043E ").concat(enemyName, " \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u043E \u0432\u043B\u0435\u043F\u0438\u043B \u0441\u0442\u043E\u043F\u043E\u0439 \u0432 \u0436\u0438\u0432\u043E\u0442 \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0430. - ").concat(count, " hp. \u0423 ").concat(name, " [").concat(current, "/").concat(total, "]"), "".concat(name, " \u0437\u0430\u0431\u044B\u043B\u0441\u044F, \u043D\u043E \u0432 \u044D\u0442\u043E \u0432\u0440\u0435\u043C\u044F \u043D\u0430\u0433\u043B\u044B\u0439 ").concat(enemyName, ", \u043F\u0440\u0438\u043D\u044F\u0432 \u0432\u043E\u043B\u0435\u0432\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435, \u043D\u0435\u0441\u043B\u044B\u0448\u043D\u043E \u043F\u043E\u0434\u043E\u0439\u0434\u044F \u0441\u0437\u0430\u0434\u0438, \u0443\u0434\u0430\u0440\u0438\u043B. - ").concat(count, " hp. \u0423 ").concat(name, " [").concat(current, "/").concat(total, "]"), "".concat(name, " \u043F\u044B\u0442\u0430\u043B\u0441\u044F \u0447\u0442\u043E-\u0442\u043E \u0441\u043A\u0430\u0437\u0430\u0442\u044C, \u043D\u043E \u0432\u0434\u0440\u0443\u0433, \u043D\u0435\u043E\u0436\u0438\u0434\u0430\u043D\u043D\u043E ").concat(enemyName, " \u0441\u043E \u0441\u043A\u0443\u043A\u0438, \u0440\u0430\u0437\u0431\u0438\u043B \u0431\u0440\u043E\u0432\u044C \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0443. - ").concat(count, " hp. \u0423 ").concat(name, " [").concat(current, "/").concat(total, "]")];
  return logs[Math.floor(Math.random() * logs.length)];
}

function writeLog(whoDamaged, whoHit) {
  return function writeLog4Selectors(damage) {
    var log = generateLog(whoDamaged, whoHit, damage);
    var $p = document.createElement('p');
    $p.innerText = (0, _main.currentCountHits)() + "." + log;

    _elements.$logs.insertBefore($p, _elements.$logs.children[0]);
  };
}

var writeLog4Player = writeLog(_pokemonscreate.player1, _pokemonscreate.player2);
exports.writeLog4Player = writeLog4Player;
var writeLog4Enemy = writeLog(_pokemonscreate.player2, _pokemonscreate.player1);
exports.writeLog4Enemy = writeLog4Enemy;
},{"./pokemonscreate.js":"pokemonscreate.js","./main.js":"main.js","./elements.js":"elements.js"}],"buttons.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.countHits = countHits;
exports.counterBtnClicks = counterBtnClicks;

var _elements = require("./elements.js");

function countHits(num) {
  return function countHitsButton() {
    return num++;
  };
}

function counterBtnClicks(maxCLicks, btnName) {
  var text = btnName.innerText;
  btnName.innerText = "".concat(text, " (").concat(maxCLicks, ")");
  return function leftBtnClicks() {
    maxCLicks--;

    if (maxCLicks == 0) {
      btnName.disabled = true;
    }

    btnName.innerText = "".concat(text, " (").concat(maxCLicks, ")");
    return maxCLicks;
  };
}
},{"./elements.js":"elements.js"}],"main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.currentCountHits = void 0;

var _utils = _interopRequireDefault(require("./utils.js"));

var _elements = require("./elements.js");

var _logs = require("./logs.js");

var _pokemonscreate = require("./pokemonscreate.js");

var _buttons = require("./buttons.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var currentCountHits = (0, _buttons.countHits)(1);
exports.currentCountHits = currentCountHits;
var leftLowKickHits = (0, _buttons.counterBtnClicks)(4, _elements.$btnLowKick);
var leftDefaultAttackHits = (0, _buttons.counterBtnClicks)(100, _elements.$btnDefaultAttack);
var leftUltimateHits = (0, _buttons.counterBtnClicks)(5, _elements.$btnCharcterUltimateaAttack);

_elements.$btnLowKick.addEventListener('click', function () {
  leftLowKickHits();

  var damagePerHitPlayer = _pokemonscreate.player1.changeHP((0, _utils.default)(36));

  (0, _logs.writeLog4Player)(damagePerHitPlayer);

  var damagePerHitEnemy = _pokemonscreate.player2.changeHP((0, _utils.default)(12));

  (0, _logs.writeLog4Enemy)(damagePerHitEnemy);
});

_elements.$btnDefaultAttack.addEventListener('click', function () {
  leftDefaultAttackHits();

  var damagePerHitPlayer = _pokemonscreate.player1.changeHP((0, _utils.default)(18));

  (0, _logs.writeLog4Player)(damagePerHitPlayer);

  var damagePerHitEnemy = _pokemonscreate.player2.changeHP((0, _utils.default)(18));

  (0, _logs.writeLog4Enemy)(damagePerHitEnemy);
});

_elements.$btnCharcterUltimateaAttack.addEventListener('click', function () {
  leftUltimateHits();

  var damagePerHitPlayer = _pokemonscreate.player1.changeHP((0, _utils.default)(12));

  (0, _logs.writeLog4Player)(damagePerHitPlayer);

  var damagePerHitEnemy = _pokemonscreate.player2.changeHP((0, _utils.default)(36));

  (0, _logs.writeLog4Enemy)(damagePerHitEnemy);
});
},{"./utils.js":"utils.js","./elements.js":"elements.js","./logs.js":"logs.js","./pokemonscreate.js":"pokemonscreate.js","./buttons.js":"buttons.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64831" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map