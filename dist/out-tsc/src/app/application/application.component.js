import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogEditApplication } from './dialog-editApplication';
const apps = [];
let ApplicationComponent = class ApplicationComponent {
    constructor(service, router, dialog) {
        this.service = service;
        this.router = router;
        this.dialog = dialog;
        this.client = [];
        this.form = {};
        this.displayedColumns = ['applicationId', 'clientName', 'applicationName', 'active', 'action'];
        this.dataSource = new MatTableDataSource(apps);
    }
    ngOnInit() {
        this.service.getClientName().subscribe(result => {
            this.clientname = result;
        }, error => console.error(error));
        this.service.getApplicationData().subscribe(data => {
            this.dataSource = data;
            //this.message=data;
            console.log("getApplicationData" + JSON.stringify(data));
        });
    }
    doSaveApplication() {
        let resp = this.service.doSaveApplication(this.form);
        const dialogRef = this.dialog.open(DialogClose, {
            width: '250px',
        });
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
    editApplication(action, obj) {
        obj.action = action;
        let params = {
            row: obj,
            clientName: this.clientname
        };
        const dialogRef = this.dialog.open(DialogEditApplication, {
            width: '250px',
            data: params
        });
        dialogRef.afterClosed().subscribe(result => {
            this.updateRow(result.data);
            //let resp = this.service.doEditRole(result.data);
        });
    }
    updateRow(row_obj) {
        this.dataSource = this.dataSource.filter((value, key) => {
            if (value.applicationId == row_obj.applicationId) {
                value.applicationName = row_obj.applicationName;
                value.active = row_obj.active;
            }
            return true;
        });
        let resp = this.service.doEditApplication(row_obj);
    }
};
__decorate([
    ViewChild(MatPaginator)
], ApplicationComponent.prototype, "paginator", void 0);
__decorate([
    ViewChild(MatSort, { static: true })
], ApplicationComponent.prototype, "sort", void 0);
ApplicationComponent = __decorate([
    Component({
        selector: 'app-application',
        templateUrl: './application.component.html',
        styleUrls: ['./application.component.css']
    })
], ApplicationComponent);
export { ApplicationComponent };
let DialogClose = class DialogClose {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    close() {
        this.dialogRef.close();
    }
};
DialogClose = __decorate([
    Component({
        selector: 'dialog-open',
        templateUrl: 'dialog-open.html',
    })
], DialogClose);
export { DialogClose };
//# sourceMappingURL=application.component.js.map