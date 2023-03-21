"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("../component/ModalValidate.css");
var ModalValidate = function ModalValidate(props) {
  if (!props.show) {
    return null;
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal",
    onClick: props.onClose
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modalBody"
  }, "Employee have been created !"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "closeButton",
    onClick: props.onClose,
    submitting: "true"
  }, "X"));
};
var _default = ModalValidate;
exports["default"] = _default;