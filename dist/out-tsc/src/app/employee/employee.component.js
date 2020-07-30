import { __decorate } from "tslib";
import { Component } from '@angular/core';
let EmployeeComponent = class EmployeeComponent {
    constructor(httpClientService, router) {
        this.httpClientService = httpClientService;
        this.router = router;
    }
    ngOnInit() {
        this.httpClientService.getUserRequestList().subscribe(response => this.handleSuccessfulResponse(response));
    }
    handleSuccessfulResponse(response) {
        this.employees = response;
    }
};
EmployeeComponent = __decorate([
    Component({
        selector: 'app-employee',
        templateUrl: './employee.component.html',
        styleUrls: ['./employee.component.css']
    })
], EmployeeComponent);
export { EmployeeComponent };
//# sourceMappingURL=employee.component.js.map