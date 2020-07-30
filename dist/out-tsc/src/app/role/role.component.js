import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogEdit } from './dialog-edit';
const users = [];
//const ELEMENT_DATA: PeriodicElement[] = [
// {position: 1, name: name, weight: 1.0079, symbol: 'H'},
//];
let RoleComponent = class RoleComponent {
    constructor(service, router, dialog) {
        this.service = service;
        this.router = router;
        this.dialog = dialog;
        this.form = {};
        this.displayedColumns = ['roleId', 'roleName', 'active', 'action'];
        this.dataSource = new MatTableDataSource(users);
        // const users: roleData[] = [];
        //this.dataSource = new MatTableDataSource(users);
        //for (let i = 1; i <= 100; i++) { users.push(); }
        // this.dataSource = new MatTableDataSource(users);
    }
    ngOnInit() {
        debugger;
        // this.dataSource.sort = this.sort;
        this.service.getRoleData().subscribe(data => {
            this.dataSource = data;
            //this.message=data;
            console.log("GETROLE" + JSON.stringify(data));
        });
    }
    doSaveRole() {
        debugger;
        let resp = this.service.doSaveRole(this.form);
        const dialogRef = this.dialog.open(DialogClose, {
            width: '250px',
        });
        // let tabl = this.service.getUser();
        /*resp.subscribe(data => {
          this.message = data;
          console.log(data);
        });*/
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
    editValue(action, obj) {
        obj.action = action;
        const dialogRef = this.dialog.open(DialogEdit, {
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
            if (value.roleId == row_obj.roleId) {
                value.roleName = row_obj.roleName;
                value.active = row_obj.active;
            }
            return true;
        });
        let resp = this.service.doEditRole(row_obj);
    }
};
__decorate([
    ViewChild(MatPaginator)
], RoleComponent.prototype, "paginator", void 0);
__decorate([
    ViewChild(MatSort, { static: true })
], RoleComponent.prototype, "sort", void 0);
RoleComponent = __decorate([
    Component({
        selector: 'app-role',
        templateUrl: './role.component.html',
        styleUrls: ['./role.component.css']
    })
], RoleComponent);
export { RoleComponent };
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
//# sourceMappingURL=role.component.js.map