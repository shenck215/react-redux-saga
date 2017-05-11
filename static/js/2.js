webpackJsonp([2],{

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable */
var ModalApp = function (_Component) {
    _inherits(ModalApp, _Component);

    function ModalApp(props) {
        _classCallCheck(this, ModalApp);

        var _this = _possibleConstructorReturn(this, (ModalApp.__proto__ || Object.getPrototypeOf(ModalApp)).call(this, props));

        _this.handleShowModal = function () {
            _this.setState({
                visible: true
            });
        };

        _this.handleHideModal = function () {
            _this.setState({
                visible: false
            });
            console.log('You Click Close !');
        };

        _this.handleOkModal = function () {
            console.log('You Click Ok !');
        };

        return _this;
    }

    _createClass(ModalApp, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.state = {
                visible: false
            };
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _antd.Button,
                    {
                        type: 'primary',
                        onClick: this.handleShowModal
                    },
                    'click'
                ),
                _react2.default.createElement(
                    _antd.Modal,
                    {
                        title: 'demo',
                        maskClosable: false,
                        visible: this.state.visible,
                        onOk: this.handleOkModal,
                        onCancel: this.handleHideModal,
                        okText: '\u786E\u5B9A',
                        cancelText: '\u53D6\u6D88'
                    },
                    _react2.default.createElement(
                        'p',
                        null,
                        'keke'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'keke'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'keke'
                    )
                )
            );
        }
    }]);

    return ModalApp;
}(_react.Component);

exports.default = ModalApp;

/***/ })

});
//# sourceMappingURL=2.js.map