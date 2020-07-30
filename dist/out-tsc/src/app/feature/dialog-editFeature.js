import { __decorate, __param } from "tslib";
import { Component, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
let DialogEditFeature = class DialogEditFeature {
    constructor(dialogRef, 
    //@Optional() is used to prevent error if no data is passed
    data) {
        this.dialogRef = dialogRef;
        this.data = data;
        console.log(data);
        this.local_data = data;
        this.action = this.local_data.action;
    }
    doAction() {
        this.dialogRef.close({ event: this.action, data: this.local_data });
    }
    closeDialog() {
        this.dialogRef.close({ event: 'Cancel' });
    }
};
DialogEditFeature = __decorate([
    Component({
        selector: 'dialog-editFeature',
        templateUrl: 'dialog-editFeature.html',
        styleUrls: ['./feature.component.css']
    }),
    __param(1, Optional()), __param(1, Inject(MAT_DIALOG_DATA))
], DialogEditFeature);
export { DialogEditFeature };
//# sourceMappingURL=dialog-editFeature.js.map