import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AddComponent } from "./ouvrage/add/add.component";
import { DetailComponent } from "./ouvrage/detail/detail.component";
import { ListComponent } from "./ouvrage/list/list.component";


const APP_ROUTING: Routes = [

  {path: 'a', component: DashboardComponent},
  {path: 'list', component: ListComponent},
  {path: 'add', component: AddComponent},
  {path: 'detail/:id', component: DetailComponent},
];
export const ROUTING = RouterModule.forRoot(APP_ROUTING);
