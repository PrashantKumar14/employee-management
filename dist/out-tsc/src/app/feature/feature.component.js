import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogEditFeature } from './dialog-editFeature';
const features = [];
let FeatureComponent = class FeatureComponent {
    constructor(service, router, dialog) {
        this.service = service;
        this.router = router;
        this.dialog = dialog;
        this.app = [];
        this.form = {};
        this.displayedColumns = ['featureId', 'applicationName', 'featureName', 'active', 'action'];
        this.dataSource = new MatTableDataSource(features);
    }
    ngOnInit() {
        this.service.getApplicationName().subscribe(result => {
            this.applicationname = result;
            console.log("ApplicationName::" + JSON.stringify(this.applicationname));
        }, error => console.error(error));
        this.service.getFeatureData().subscribe(data => {
            this.dataSource = data;
            //this.message=data;
            console.log("getFeatureData" + JSON.stringify(data));
        });
    }
    doSaveFeature() {
        let resp = this.service.doSaveFeature(this.form);
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
    editFeature(action, obj) {
        obj.action = action;
        const dialogRef = this.dialog.open(DialogEditFeature, {
            width: '250px',
            data: obj
        });
        dialogRef.afterClosed().subscribe(result => {
            this.updateRow(result.data);
            //let resp = this.service.doEditRole(result.data);
        });
    }
    updateRow(row_obj) {
        this.dataSource = this.dataSource.filter((value, key) => {
            if (value.featureId == row_obj.featureId) {
                value.featureName = row_obj.featureName;
                value.active = row_obj.active;
            }
            return true;
        });
        let resp = this.service.doEditFeature(row_obj);
    }
};
__decorate([
    ViewChild(MatPaginator)
], FeatureComponent.prototype, "paginator", void 0);
__decorate([
    ViewChild(MatSort, { static: true })
], FeatureComponent.prototype, "sort", void 0);
FeatureComponent = __decorate([
    Component({
        selector: 'app-feature',
        templateUrl: './feature.component.html',
        styleUrls: ['./feature.component.css']
    })
], FeatureComponent);
export { FeatureComponent };
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
//# sourceMappingURL=feature.component.js.map