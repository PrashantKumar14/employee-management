import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = 'Bad Credentials';
    }
    ngOnInit() {
    }
    doLogin() {
        let resp = this.service.login(this.form);
        resp.subscribe(data => {
            this.message = data;
            console.log(data);
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            if (data == "ROLE_ADMIN") {
                this.router.navigate(["/admin"]);
            }
            else if (data == "ROLE_USER") {
                this.router.navigate(["/"]);
            }
        }, err => {
            this.errorMessage = "Username or Password is incorrect";
            this.isLoginFailed = true;
        });
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map