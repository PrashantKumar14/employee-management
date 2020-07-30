import { __decorate, __param } from "tslib";
import { Component, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
let DialogEditApplication = class DialogEditApplication {
    constructor(dialogRef, 
    //@Optional() is used to prevent error if no data is passed
    data) {
        this.dialogRef = dialogRef;
        this.data = data;
        console.log(data);
        if (data) {
            this.local_data = data.row;
            this.action = this.local_data.action;
            this.drpClient = data.clientName;
        }
        // this.local_data =data
    }
    doAction() {
        this.dialogRef.close({ event: this.action, data: this.local_data });
    }
    closeDialog() {
        this.dialogRef.close({ event: 'Cancel' });
    }
};
DialogEditApplication = __decorate([
    Component({
        selector: 'dialog-editApplication',
        templateUrl: 'dialog-editApplication.html',
        styleUrls: ['./application.component.css']
    }),
    __param(1, Optional()), __param(1, Inject(MAT_DIALOG_DATA))
], DialogEditApplication);
export { DialogEditApplication };
//# sourceMappingURL=dialog-editApplication.js.map