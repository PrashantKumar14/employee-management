import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogEditUser } from './dialog-editUser';
const users = [];
let UserComponent = class UserComponent {
    constructor(service, router, dialog) {
        this.service = service;
        this.router = router;
        this.dialog = dialog;
        this.app = [];
        this.form = {};
        this.displayedColumns = ['userId', 'userName', 'userFirstName', 'empLastName', 'userEmail', 'active', 'action', 'permission'];
        this.dataSource = new MatTableDataSource(users);
    }
    ngOnInit() {
        this.service.getApplicationName().subscribe(result => {
            this.applicationname = result;
            console.log("ApplicationName::" + JSON.stringify(this.applicationname));
        }, error => console.error(error));
        this.service.getUserData(this.form).subscribe(data => {
            this.dataSource = data;
            //this.message=data;
            console.log("UserData" + JSON.stringify(data));
        });
    }
    doSaveUser() {
        let resp = this.service.doSaveUser(this.form);
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
    editUser(action, obj) {
        obj.action = action;
        const dialogRef = this.dialog.open(DialogEditUser, {
            width: '250px',
            data: obj
        });
        dialogRef.afterClosed().subscribe(result => {
            this.updateRow(result.data);
            //let resp = this.service.doEditRole(result.data);
        });
    }
    editPermission(action, obj) {
        this.router.navigate(["admin/user/managePermission"]);
    }
    updateRow(row_obj) {
        this.dataSource = this.dataSource.filter((value, key) => {
            if (value.userId == row_obj.userId) {
                value.userName = row_obj.userName;
                value.userFirstName = row_obj.userFirstName;
                value.empLastName = row_obj.empLastName;
                value.userEmail = row_obj.userEmail;
                value.active = row_obj.active;
            }
            return true;
        });
        let resp = this.service.doEditUser(row_obj);
    }
};
__decorate([
    ViewChild(MatPaginator)
], UserComponent.prototype, "paginator", void 0);
__decorate([
    ViewChild(MatSort, { static: true })
], UserComponent.prototype, "sort", void 0);
UserComponent = __decorate([
    Component({
        selector: 'app-user',
        templateUrl: './user.component.html',
        styleUrls: ['./user.component.css']
    })
], UserComponent);
export { UserComponent };
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
//# sourceMappingURL=user.component.js.map