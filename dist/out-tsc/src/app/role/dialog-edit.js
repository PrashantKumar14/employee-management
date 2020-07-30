import { __decorate, __param } from "tslib";
import { Component, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
let DialogEdit = class DialogEdit {
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
DialogEdit = __decorate([
    Component({
        selector: 'dialog-edit',
        templateUrl: 'dialog-edit.html',
        styleUrls: ['./role.component.css']
    }),
    __param(1, Optional()), __param(1, Inject(MAT_DIALOG_DATA))
], DialogEdit);
export { DialogEdit };
//# sourceMappingURL=dialog-edit.js.map