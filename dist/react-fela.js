(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global.ReactFela = factory(global.React));
}(this, function (react) { 'use strict';

  var babelHelpers = {};

  babelHelpers.classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  babelHelpers.createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  babelHelpers.extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  babelHelpers.get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  babelHelpers.inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  babelHelpers.possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  babelHelpers;


  function __commonjs(fn, module) { return module = { exports: {} }, fn(module, module.exports), module.exports; }

  var Provider = function (_Component) {
    babelHelpers.inherits(Provider, _Component);

    function Provider() {
      babelHelpers.classCallCheck(this, Provider);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Provider).apply(this, arguments));
    }

    babelHelpers.createClass(Provider, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return {
          fela: this.props.renderer.render.bind(this.props.renderer)
        };
      }
    }, {
      key: 'render',
      value: function render() {
        return this.props.children;
      }
    }]);
    return Provider;
  }(react.Component);

  Provider.propTypes = { renderer: react.PropTypes.object.isRequired };
  Provider.childContextTypes = { fela: react.PropTypes.func.isRequired };

  var defaultMapper = function defaultMapper(props) {
    return props;
  };

  function bindPropsToFela() {
    var mapper = arguments.length <= 0 || arguments[0] === undefined ? defaultMapper : arguments[0];

    return function (component) {
      // handle functional Components
      if (!component.prototype.setState) {
        var enhancedComponent = function enhancedComponent(props, context) {
          var fela = function fela(selector, additionalProps, plugins) {
            return context.fela(selector, additionalProps ? babelHelpers.extends({}, mapper(props), additionalProps) : mapper(props), plugins);
          };
          return component(babelHelpers.extends({}, props, { fela: fela }), context);
        };

        enhancedComponent.contextTypes = babelHelpers.extends({}, component.contextTypes, {
          fela: react.PropTypes.func.isRequired
        });

        return enhancedComponent;
      }

      // handle stateful class Components

      var EnhancedComponent = function (_component) {
        babelHelpers.inherits(EnhancedComponent, _component);

        function EnhancedComponent(props, context) {
          babelHelpers.classCallCheck(this, EnhancedComponent);

          var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(EnhancedComponent).call(this, props, context));

          _this.fela = function (selector, additionalProps, plugins) {
            return context.fela(selector, additionalProps ? babelHelpers.extends({}, mapper(props), additionalProps) : mapper(props), plugins);
          };
          return _this;
        }

        return EnhancedComponent;
      }(component);

      EnhancedComponent.contextTypes = babelHelpers.extends({}, component.contextTypes, {
        fela: react.PropTypes.func.isRequired
      });

      return EnhancedComponent;
    };
  }

  var emptyFunction = __commonjs(function (module) {
  "use strict";

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * 
   */

  function makeEmptyFunction(arg) {
    return function () {
      return arg;
    };
  }

  /**
   * This function accepts and discards inputs; it has no side effects. This is
   * primarily useful idiomatically for overridable function endpoints which
   * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
   */
  var emptyFunction = function emptyFunction() {};

  emptyFunction.thatReturns = makeEmptyFunction;
  emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
  emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
  emptyFunction.thatReturnsNull = makeEmptyFunction(null);
  emptyFunction.thatReturnsThis = function () {
    return this;
  };
  emptyFunction.thatReturnsArgument = function (arg) {
    return arg;
  };

  module.exports = emptyFunction;
  });

  var require$$0 = (emptyFunction && typeof emptyFunction === 'object' && 'default' in emptyFunction ? emptyFunction['default'] : emptyFunction);

  var warning = __commonjs(function (module) {
  /**
   * Copyright 2014-2015, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  'use strict';

  var emptyFunction = require$$0;

  /**
   * Similar to invariant but only logs a warning if the condition is not met.
   * This can be used to log issues in development environments in critical
   * paths. Removing the logging code for production environments will keep the
   * same logic and follow the same code paths.
   */

  var warning = emptyFunction;

  if (true) {
    warning = function warning(condition, format) {
      for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function () {
          return args[argIndex++];
        });
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      }
    };
  }

  module.exports = warning;
  });

  var warning$1 = (warning && typeof warning === 'object' && 'default' in warning ? warning['default'] : warning);

  var defaultMapper$1 = function defaultMapper(state) {
    return state;
  };

  function bindStateToFela() {
    var mapper = arguments.length <= 0 || arguments[0] === undefined ? defaultMapper$1 : arguments[0];

    return function (component) {
      // handle functional Components
      if (!component.prototype.setState) {
        warning$1(false, 'Binding state to Fela does not work with functional Components. They do not have state at all.');
        return component;
      }

      // handle stateful class Components

      var EnhancedComponent = function (_component) {
        babelHelpers.inherits(EnhancedComponent, _component);

        function EnhancedComponent() {
          babelHelpers.classCallCheck(this, EnhancedComponent);
          return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(EnhancedComponent).apply(this, arguments));
        }

        babelHelpers.createClass(EnhancedComponent, [{
          key: 'render',
          value: function render() {
            var _this2 = this;

            this.fela = function (selector, additionalProps, plugins) {
              return _this2.context.fela(selector, additionalProps ? babelHelpers.extends({}, mapper(_this2.state, _this2.props), additionalProps) : mapper(_this2.state, _this2.props), plugins);
            };
            return babelHelpers.get(Object.getPrototypeOf(EnhancedComponent.prototype), 'render', this).call(this);
          }
        }]);
        return EnhancedComponent;
      }(component);

      EnhancedComponent.contextTypes = babelHelpers.extends({}, component.contextTypes, {
        fela: react.PropTypes.func.isRequired
      });

      return EnhancedComponent;
    };
  }

  var index = {
    Provider: Provider,
    bindPropsToFela: bindPropsToFela,
    bindStateToFela: bindStateToFela
  };

  return index;

}));
//# sourceMappingURL=react-fela.js.map