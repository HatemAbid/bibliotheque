import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AddComponent } from "./ouvrage/add/add.component";
import { DetailComponent } from "./ouvrage/detail/detail.component";
import { ListComponent } from "./ouvrage/list/list.component";
import { EditComponent } from "./ouvrage/edit/edit.component";
import { LoginComponent } from "./login/login.component";
import { RedirectComponent } from "./redirect/redirect.component";
import { GitAuthComponent } from "./git-auth/git-auth.component";
import { ExturlresolverService } from "./exturlresolver.service";


const APP_ROUTING: Routes = [

  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'redirect', component: RedirectComponent},
  {path: 'test', component: GitAuthComponent, resolve: {url: ExturlresolverService }},
  {path: 'a', component: DashboardComponent},
  {path: 'list', component: ListComponent},
  {path: 'add', component: AddComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'edit/:id', component: EditComponent},
];
export const ROUTING = RouterModule.forRoot(APP_ROUTING);
