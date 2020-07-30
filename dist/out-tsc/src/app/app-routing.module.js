import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RoleComponent } from './role/role.component';
import { ClientComponent } from './client/client.component';
import { UserComponent } from './user/user.component';
import { ApplicationComponent } from './application/application.component';
import { ManagePermissionComponent } from './managePermission/managePermission.component';
import { FeatureComponent } from './feature/feature.component';
const routes = [
    { path: "", redirectTo: "/wecaast/user", pathMatch: "full" },
    { path: '', component: EmployeeComponent },
    { path: 'wecaast/user/userpage', component: LoginComponent },
    { path: 'wecaast/user/login', component: LoginComponent },
    { path: 'wecaast/user/welcome', component: LoginComponent },
    { path: 'employee', component: EmployeeComponent },
    { path: 'user/managePermission', component: ManagePermissionComponent },
    { path: "admin", component: AdminComponent, children: [
            {
                path: 'role',
                component: RoleComponent
            },
            {
                path: 'client',
                component: ClientComponent
            },
            {
                path: 'user',
                component: UserComponent, children: [
                    {
                        path: 'managePermission',
                        component: ManagePermissionComponent
                    },
                ]
            },
            {
                path: 'application',
                component: ApplicationComponent
            },
            {
                path: 'feature',
                component: FeatureComponent
            },
        ] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map