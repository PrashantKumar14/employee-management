import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogEditClient } from './dialog-editClient';
const client = [];
let ClientComponent = class ClientComponent {
    constructor(service, router, dialog) {
        this.service = service;
        this.router = router;
        this.dialog = dialog;
        this.form = {};
        this.displayedColumns = ['clientId', 'clientName', 'clientIndustry', 'imageUrl', 'active', 'action'];
        this.dataSource = new MatTableDataSource(client);
    }
    ngOnInit() {
        // this.dataSource.sort = this.sort;
        this.service.getClientData().subscribe(data => {
            this.dataSource = data;
            //this.message=data;
            console.log("GET_CLIENT::" + JSON.stringify(data));
        });
    }
    doSaveClient() {
        let resp = this.service.doSaveClient(this.form);
        const dialogRef = this.dialog.open(DialogClose, {
            width: '250px',
        });
    }
    // let tabl = this.service.getUser();
    /*resp.subscribe(data => {
      this.message = data;
      console.log(data);
    });*/
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
    editClient(action, obj) {
        obj.action = action;
        const dialogRef = this.dialog.open(DialogEditClient, {
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
            if (value.clientId == row_obj.clientId) {
                value.clientName = row_obj.clientName;
                value.clientIndustry = row_obj.clientIndustry;
                value.active = row_obj.active;
            }
            return true;
        });
        let resp = this.service.doEditClient(row_obj);
    }
};
__decorate([
    ViewChild(MatPaginator)
], ClientComponent.prototype, "paginator", void 0);
__decorate([
    ViewChild(MatSort, { static: true })
], ClientComponent.prototype, "sort", void 0);
ClientComponent = __decorate([
    Component({
        selector: 'app-client',
        templateUrl: './client.component.html',
        styleUrls: ['./client.component.css']
    })
], ClientComponent);
export { ClientComponent };
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
//# sourceMappingURL=client.component.js.map