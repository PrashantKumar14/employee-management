import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let RestapiserviceService = class RestapiserviceService {
    constructor(http) {
        this.http = http;
        this.url = "http://localhost:8050/wecaast/user";
    }
    login(credentials) {
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password) });
        return this.http.get(`${this.url}/login`, { headers, responseType: 'text' });
    }
    loginUser(username, password) {
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        return this.http.get(`${this.url}/userpage`, { headers, responseType: 'text' });
    }
    getClientName() {
        return this.http.get(`${this.url}/getClient`);
    }
    getApplicationName() {
        return this.http.get(`${this.url}/getApplication`);
    }
    doSaveRole(roleData) {
        return this.http.post(`${this.url}/createRole`, roleData).subscribe((response) => console.log(response), (error) => console.log(error));
    }
    doSaveUser(userData) {
        return this.http.post(`${this.url}/createUser`, userData).subscribe((response) => console.log(response), (error) => console.log(error));
    }
    doSaveApplication(applicationData) {
        return this.http.post(`${this.url}/createApplication`, applicationData).subscribe((response) => console.log(response), (error) => console.log(error));
    }
    doSaveFeature(featureData) {
        return this.http.post(`${this.url}/createFeatures`, featureData).subscribe((response) => console.log(response), (error) => console.log(error));
    }
    doEditRole(row_obj) {
        return this.http.put(`${this.url}/editRole`, row_obj).subscribe((response) => console.log(response), (error) => console.log(error));
    }
    doEditFeature(row_obj) {
        return this.http.put(`${this.url}/editFeatures`, row_obj).subscribe((response) => console.log(response), (error) => console.log(error));
    }
    doEditApplication(row_obj) {
        return this.http.put(`${this.url}/editApplication`, row_obj).subscribe((response) => console.log(response), (error) => console.log(error));
    }
    doEditClient(row_obj) {
        return this.http.put(`${this.url}/editClient`, row_obj).subscribe((response) => console.log(response), (error) => console.log(error));
    }
    doEditUser(row_obj) {
        return this.http.put(`${this.url}/editUser`, row_obj).subscribe((response) => console.log(response), (error) => console.log(error));
    }
    getRoleData() {
        // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password) });
        return this.http.get(`${this.url}/getRole`);
    }
    getUserData(userId) {
        // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password) });
        return this.http.get(`${this.url}/getuser`);
    }
    getApplicationData() {
        // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password) });
        return this.http.get(`${this.url}/getApplication`);
    }
    getFeatureData() {
        // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password) });
        return this.http.get(`${this.url}/getFeatures`);
    }
    doSaveClient(client) {
        //const body = {clientname: clientName, domainname: domain,clientlogo:clientLogo};
        return this.http.post(`${this.url}/createClient`, client).subscribe((response) => console.log(response), (error) => console.log(error));
    }
    getClientData() {
        return this.http.get(`${this.url}/getClient`);
    }
};
RestapiserviceService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], RestapiserviceService);
export { RestapiserviceService };
//# sourceMappingURL=restapiservice.service.js.map