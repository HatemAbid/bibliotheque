import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HttpClientXsrfModule } from "@angular/common/http";
import { OAuthModule } from "angular-oauth2-oidc";
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './ouvrage/list/list.component';
import { DetailComponent } from './ouvrage/detail/detail.component';
import { AddComponent } from './ouvrage/add/add.component';
import { EditComponent } from './ouvrage/edit/edit.component';
import { ROUTING } from './app.routing';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RedirectComponent } from './redirect/redirect.component';
import { GitAuthComponent } from './git-auth/git-auth.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListComponent,
    DetailComponent,
    AddComponent,
    EditComponent,
    LoginComponent,
    RedirectComponent,
    GitAuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ROUTING,
    HttpClientModule,
    HttpClientXsrfModule,
    OAuthModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
