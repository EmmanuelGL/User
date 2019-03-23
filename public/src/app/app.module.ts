import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UserService } from "./user/user.service";

import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserEditComponent,
    UserListComponent,
    UserNewComponent,
    UserComponent
  ],
  imports: [
    //importas librerias 
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    // PARA OBTENER LOS SERVICION QUE GENERAMOS 
    UserService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
