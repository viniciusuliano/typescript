"use strict";
// Enumerar tipo de dados
var DesignColors;
(function (DesignColors) {
    DesignColors["white"] = "#FFF";
    DesignColors["black"] = "#000";
})(DesignColors || (DesignColors = {}));
var StatusPermission;
(function (StatusPermission) {
    StatusPermission[StatusPermission["ADMIN"] = 0] = "ADMIN";
    StatusPermission[StatusPermission["USER"] = 1] = "USER";
    StatusPermission[StatusPermission["SUPPORT"] = 2] = "SUPPORT";
})(StatusPermission || (StatusPermission = {}));
console.log(StatusPermission.ADMIN);
console.log(DesignColors.black);
