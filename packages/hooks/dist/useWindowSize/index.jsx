var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
var useWindowSize = function () {
    var _a = React.useState({
        measures: { width: 0, height: 0 },
    }), dynamicInfo = _a[0], updateDynamicInfo = _a[1];
    var hasClientSide = function () { return typeof window !== "undefined"; };
    var measures = function () { return ({
        width: hasClientSide() ? window.innerWidth : 0,
        height: hasClientSide() ? window.innerHeight : 0,
    }); };
    React.useEffect(function () {
        if (hasClientSide()) {
            var onResize_1 = function () {
                return updateDynamicInfo(function (p) { return (__assign(__assign({}, p), { measures: __assign({}, measures()) })); });
            };
            !!window &&
                typeof window.addEventListener === "function" &&
                window.addEventListener("resize", onResize_1);
            return function () {
                if (!!window && typeof window.removeEventListener == "function") {
                    return window.removeEventListener("resize", onResize_1);
                }
            };
        }
    }, []);
    return dynamicInfo.measures;
};
export default useWindowSize;
