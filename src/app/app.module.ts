import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './ouvrage/list/list.component';
import { DetailComponent } from './ouvrage/detail/detail.component';
import { AddComponent } from './ouvrage/add/add.component';
import { EditComponent } from './ouvrage/edit/edit.component';
import { ROUTING } from './app.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListComponent,
    DetailComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
