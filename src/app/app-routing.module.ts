import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { ListEmployeeComponent } from './employees/list-employee/list-employee.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { AuthGuard } from './shared/auth.guard';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path:'',component:LoginComponent},
  //we will create all our routes here.
  //{path:'',component:ListEmployeeComponent},
  {path:'Listemployee',component:ListEmployeeComponent , canActivate:[AuthGuard]},//this listemployee is protected by this authGuard
  {path:'addemployee',component:AddEmployeeComponent},
  { path: 'editemployee/:empId', component: EditEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
