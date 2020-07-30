import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
export class UserRequest {
    constructor(_userId, _userName, _userEmail) {
        this._userId = _userId;
        this._userName = _userName;
        this._userEmail = _userEmail;
        this.userId = _userId;
        this.userName = _userName;
        this.userEmail = _userEmail;
    }
}
let HttpClientService = class HttpClientService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8000/wecaast/user/getName';
    }
    getUserRequestList() {
        var response = this.http.get(this.url);
        console.log("DATA:", response);
        return response;
    }
};
HttpClientService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], HttpClientService);
export { HttpClientService };
//# sourceMappingURL=http-client.service.js.map